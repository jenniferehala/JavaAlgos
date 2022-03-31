flattenChildren(){
    var runner = this.head
    while (runner !== null) {
        // As long as we have a runner -
        if (runner.child === null) {
            // When there is no child we keep on truckin'
            runner = runner.next
            continue;
        }
        let childrunner = runner.child.head

        while (childrunner.next !== null) childrunner = childrunner.next;
        // We keep the child runner truckin' along

        // This pools our last child node up to the parent list
        childrunner.next = runner.next
        // Sets our child head node to be next in line after our runner (in the parent list)
        runner.next = runner.child.head
        // Make our runner a track star
        runner = runner.next
    }
    return this
}