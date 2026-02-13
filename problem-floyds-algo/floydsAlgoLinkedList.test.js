const linkedList = require("./floydsAlgoLinkedList");
let node1 = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: {
                    value: 5,
                    next: {
                        value: 6,
                        next: {
                            value: 7,
                            next: {
                                value: 8,
                                next: null
                            }
                        }
                    }
                }
            }
        }
    }
};
node1.next.next.next.next.next.next.next = node1.next.next;

let node2 = {
    value: 10,
    next: {
        value: 20,
        next: {
            value: 30,
            next: null
        }
    }
};
node2.next.next.next = node2;

let node3 = {
    value: 100,
    next: {
        value: 200,
        next: {
            value: 300,
            next: null
        }
    }
};
node3.next.next.next = node3.next;


let node4 = {
    value: 100,
    next: null
};

let node5 = {
    value: 100,
    next: null
};
node5.next = node5;

let node6 = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: {
                    value: 5,
                    next: null
                }
            }
        }
    }
};
test(linkedList.description, () => {
    expect(linkedList.floydsAlgo(node1)).toStrictEqual(node1.next.next);
    expect(linkedList.floydsAlgo(node2)).toStrictEqual(node2);
    expect(linkedList.floydsAlgo(node3)).toStrictEqual(node3.next);
    expect(linkedList.floydsAlgo(node4)).toStrictEqual(false);
    expect(linkedList.floydsAlgo(node5)).toStrictEqual(node5);
    expect(linkedList.floydsAlgo(node6)).toStrictEqual(false);
});
