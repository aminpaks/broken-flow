import { getTest, neededForFix } from './util';

export const ComponentA = () => {
    const updatedValueAC = neededForFix(2);
    const testValue = getTest(neededForFix);
    return (
        <div>
            Component A--FROM-BUGFIX-BRANCH--{testValue}--updated
        </div>
    );
};
