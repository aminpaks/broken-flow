import { getTest, neededForFix } from './util';

export const Child = () => <span>OKAY</span>;

export const ComponentA = () => {
    const updatedValueAC = neededForFix(2);
    const testValue = getTest(updatedValueAC, 'check');
    return (
        <div>
            Component A--{'FIX#6'}--FROM-BUGFIX-BRANCH--{testValue}--updated
            <Child />
        </div>
    );
};
