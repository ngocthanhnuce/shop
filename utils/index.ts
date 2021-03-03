function myPagination({ currentPage, totalItems, pageSize = 5, maxDisplay = 5 }) {
    let totalPage = Math.ceil(totalItems / pageSize);
    let nextPage = totalPage > currentPage ? currentPage + 1 : 0;
    let prevPage =  currentPage - 1;
    let items = [];
    let average = Math.ceil(maxDisplay / 2);
    
    if(totalPage <= maxDisplay) {
        for(let i = 1; i<= totalPage;i++) {
            items.push(i)
        }
    } else if (currentPage <=  average) {
        for(let i = 1; i <= maxDisplay;i++) {
            items.push(i)
        }
    } else if (currentPage >  totalPage - average) {
        for(let i = totalPage - maxDisplay + 1; i <= totalPage;i++) {
            items.push(i)
        }
    } else {
        const temp = Math.floor(maxDisplay / 2)
        for(let i = currentPage - temp ; i <= currentPage + temp; i++) {
            items.push(i)
        }
    }
    return {
        totalPage,
        nextPage,
        prevPage,
        items,
      }
}

// 1       1 2 3 4 5 ... > 
// 2       1 2 3 4 5 ... >
// 3       1 2 3 4 5 ... >
// 4 < ... 2 3 4 5 6 ... >
// ....
// 8  < ... 6 7 8 9 10
// 9  < ... 6 7 8 9 10
// 10 < ... 6 7 8 9 10

function  myBrowser() {
    this.prevStack = [];
    this.nextStack = [];
    return {
        add: (url) => {
            this.prevStack.push(url);
            this.nextStack = [];
        },
        next: () => {
            /** Your code is here */
            const urlNext = this.nextStack.pop();       
            if(urlNext) {
                this.prevStack.push(urlNext);
            } 
        },
        back: () => {
            /** Your code is here */
            const url = this.prevStack.pop();
            this.nextStack.push(url);

        },
        get:() => ({
            nextStack: this.nextStack, 
            prevStack: this.prevStack, 
        })



    }
}

module.exports = { pagination: myPagination, Browser: myBrowser }


  // "test": "jest --coverage"