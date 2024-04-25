import { Map, List } from 'immutable';

export function concatElements(page1, page2) {
    const first = List(page1);
    const second = List(page2);
    return first.concat(second);
}
export function mergeElements(page1, page2) {
    const first = Map(page1);
    const second = Map(page2);
    return first.merge(second);
}
