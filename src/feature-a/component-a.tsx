import { computeAC, getTest, neededForFix } from './util';

export const ComponentA = ({ children }: { children: string }) => <div>Component A{children}</div>;

export const ComponentAC = () => {
    const updatedValueAC = neededForFix(2);
    const valueAC = computeAC();
    const valueTest = getTest(String(updatedValueAC));
    return (
        <div>
            Component A--FROM-BUGFIX-BRANCH-- {valueAC} --updated-- {valueTest}
        </div>
    );
};