let MinHeap = function() {
    this.heap = [];
}

MinHeap.prototype.insert = function(value){
    this.heap[this.heap.length] = value;
    this.minHeapify();
}

MinHeap.prototype.minHeapify = function(){
    let i = this.heap.length - 1;

    while (i > 0 && this.heap[i] < this.heap[Math.floor((i - 1)/2)]){
        let temp = this.heap[i];
        this.heap[i] = this.heap[Math.floor((i-1)/2)];
        this.heap[Math.floor((i-1)/2)] = temp;
        i = Math.floor((i - 1) / 2);
    }
}

MinHeap.prototype.remove = function(value){
    if (this.heap.length == 0){
        return false;
    }

    let i = 0;
    while (this.heap[i] !== value){
        if (i == this.heap.length - 1){
            return false;
        }
        i++;
    }
    if (i === this.heap.length - 1) {
        this.heap.pop();
        return true;
    }

    this.heap[i] = this.heap.pop();
    let left = i*2 + 1;
    let right = i*2 + 2;

    while (left < this.heap.length && this.heap[i] > this.heap[left]
            || this.heap[i] > this.heap[right]){
            
                if (this.heap[left] < this.heap[right]){
                    let temp = this.heap[i];
                    this.heap[i] = this.heap[left];
                    this.heap[left] = temp;
                } else {
                    let temp = this.heap[i];
                    this.heap[i] = this.heap[right];
                    this.heap[right] = temp;
                }
    }
    return true;
}

MinHeap.prototype.contains = function (value){
    if (this.heap.length == 0){
        return false;
    }

    let start = 0;
    let nodes = 1;

    while (start < this.heap.length){
        start = nodes - 1;
        let end = nodes + start;
        let count = 0;

        while (start < this.heap.length && start < end){
            if (this.heap[start] == value){
                return true;
            } else if (value > this.heap[Math.floor((start-1)/2)] 
            && value < this.heap[start]) {
                count++;
            }
            start++;
        }

        if (count == nodes){
            return false;
        }
        nodes *= 2;
    }
    return false;
}