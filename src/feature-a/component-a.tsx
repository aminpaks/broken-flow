import { computeAC, getTest } from './util';

export const ComponentA = ({ children }: { children: string }) => <div>Component A{children}</div>;

export const ComponentAC = () => {
    const valueAC = computeAC();
    const valueTest = getTest();
    return (
        <div>
            Component AC -- {valueAC} -- {valueTest}
        </div>
    );
};