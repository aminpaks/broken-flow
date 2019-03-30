import { getTest } from './util';

export const ComponentA = () => {
    const testValue = getTest();
    return (
        <div>
            Component A--{testValue}
        </div>
    );
};