import { computeAC } from './util';

export const ComponentA = ({ children }: { children: string }) => <div>Component A{children}</div>;

export const ComponentAC = () => {
    const valueAC = computeAC();
    return (
        <div>
            Component AC -- {valueAC}
        </div>
    );
};