const fs = require('fs');
const path = require('path');
const base = require('./base.json');

const rulesFolder = "./rules";
const targetFolder = "./dist";

function checkSubProperty(obj, propName, validationFunc, optional = false) {
    if (obj[propName]) {
        if (!validationFunc(obj[propName])) {
            console.error(`Property ${propName} is not valid`);
            return false;
        }
    } else if (!optional) {
        console.error(`Property ${propName} is required`);
        return false;
    }
    return true;
}

function anyFalse(...args) {
    return args.some((arg) => !arg);
}

function nodeValidator(node) {
    // detect node is a valid object
    if (typeof node !== 'object') {
        return false;
    }
    // valid all subnode
    if (anyFalse(
        checkSubProperty(node, 'id', (id) => typeof id === 'string'),
        checkSubProperty(node, 'name', (name) => typeof name === 'string'),
        checkSubProperty(node, 'groups', (groups) => Array.isArray(groups))
    )) {
        return false;
    }
    // valid groups
    for (const group of node.groups) {
        if (anyFalse(
            checkSubProperty(group, 'key', (key) => typeof key === 'number'),
            checkSubProperty(group, 'name', (name) => typeof name === 'string'),
            checkSubProperty(group, 'activityIds', (activityIds) => Array.isArray(activityIds)),
            checkSubProperty(group, 'rules', (rules) => Array.isArray(rules))
        )) {
            return false;
        }
        // valid rules
        for (const rule of group.rules) {
            if (anyFalse(
                checkSubProperty(rule, 'matches', (matches) => typeof matches === 'string'),
                checkSubProperty(rule, 'snapshotUrls', (snapshotUrls) => typeof (snapshotUrls) === 'string' || Array.isArray(snapshotUrls))
            )) {
                return false;
            }
        }
    }
    return true;
}

const rulesFiles = fs.readdirSync(rulesFolder);
const rules = [];
for (const file of rulesFiles) {
    try {
        console.log('Importing: ', file);
        const rule = require(path.resolve(__dirname, rulesFolder, file));
        if (!nodeValidator(rule)) {
            throw new Error(`Rule ${file} is not valid`);
        }
        rules.push(rule);
    } catch (error) {
        console.error('Import Failed: ', error);
    }
}

const oldFiles = fs.readdirSync(targetFolder);

const oldFile = oldFiles.find((file) => file.endsWith('.json'));

if (oldFile) {
    const oldFileContent = require(path.resolve(__dirname, targetFolder, oldFile));
    const oldRules = oldFileContent.apps;

    if (JSON.stringify(oldRules) !== JSON.stringify(rules)) {
        base.version++;
        console.log('Bumping version to: ', base.version);
        fs.writeFileSync("./base.json", JSON.stringify(base, null, 2));
    } else {
        console.log('No change in rules, version not bumped');
    }
} else {
    base.version++;
    console.log('Bumping version to: ', base.version);
    fs.writeFileSync("./base.json", JSON.stringify(base, null, 2));
}

base.apps = rules;
if (!fs.existsSync(targetFolder)) {
    fs.mkdirSync(targetFolder);
}
fs.writeFileSync(path.join(targetFolder, 'cky-gkd-rules.json'), JSON.stringify(base, null, 2));

console.log('Done with', rules.length, 'rules!');