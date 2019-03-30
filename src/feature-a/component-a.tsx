import { computeAC, getTest, neededForFix } from './util';

export const ComponentA = ({ children }: { children: string }) => <div>Component A{children}</div>;
export const Child = () => <span>OKAY</span>;

export const ComponentAC = () => {
    const updatedValueAC = neededForFix(2);
    const valueAC = computeAC();
    const valueTest = getTest(String(updatedValueAC), 'check');
    return (
        <div>
            Component A--{'FIX#6'}-FROM-BUGFIX-BRANCH-- {valueAC} --updated-- {valueTest}
            <Child />
        </div>
    );
};