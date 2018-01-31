function toggle(array, element) {
    array = array.slice();
    const ix = array.indexOf(element);
    if (ix === -1) {
        array.push(element);
    } else {
        array.splice(ix, 1);
    }

    return array;
}

function remove(array, element) {
    const ix = array.indexOf(element);
    if (ix === -1) {
        return array;
    }

    array = array.slice();
    if (ix !== -1) {
        array.splice(ix, 1);
    }

    return array;
}

export { toggle, remove };
