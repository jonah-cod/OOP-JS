//Classes, Constructors and instances
// library management system

//library class

class Library {
    //properties
    books;
    borrowers;
    transactions;

    //methods
    constructor(){
        this.books = [];
        this.borrowers = [];
        this.transactions = [];
    }

    addBook(book){
        this.books.push(book)
    }
    removeBook(book){
        let index = this.books.indexOf(book);
        if (index>=0) {
            this.books.splice(index, 1)
        }
    }
    //more methods
    addBorrower(borrower){
        this.borrowers.push(borrower)
    }

    removeBorrower(borrower){
        let index = this.borrowers.indexOf(borrower);
        if (index>=0) {
            this.borrowers.splice(index, 1);
        }
    }

    addTransaction(transaction){
        this.transactions.push(transaction)
    }

}


const DeKUTLibrary = new Library();

// book class

class Book{
    
    constructor (title, ISBN){
        this.title = title;
        this.ISBN = ISBN;
        this.availability = true;
    }

    lendBook(){
        if(this.availability){
            this.availability = false;
            console.log("This book has been lend to you")
        }
    }

    returnBook(){
        this.availability = true;
        console.log("This book has been returned");
    }
}

const JavaScriptForDummies = new Book("JavaScript for Dummies", "IHGT3425");

console.log(JavaScriptForDummies);

DeKUTLibrary.addBook(JavaScriptForDummies)
console.log(DeKUTLibrary);

//inheritance
//this is the super class

class User{
    name;
    ID;
    borrowedBooks;
    constructor(name, ID){
        this.name = name;
        this.ID = ID;
        this.borrowedBooks = [];
    }

    borrowBook(book){
        if (book.availability) {
            book.lendBook()
        }else{
            console.log("This book is not available right now.")
        }
    }

    returnBook(book){
        book.returnBook()
    }
}

// class borrower
//this sub class

class Borrower extends User{
    constructor(name, ID){
        //super is always called before initialization of prperties native to this class.
        super(name, ID)
    }
}

const Peter = new Borrower("Peter", "45892596");
Peter.borrowBook(JavaScriptForDummies)
DeKUTLibrary.addBorrower(Peter);


//employee class

class Employee extends User{
    salary;
    noHoursWorked;
    ratePerHour;
    constructor(name, ID, ratePerHour){
        //super is always called before initialization of prperties native to this class.
        super(name, ID);
        this.ratePerHour = ratePerHour;
        this.noHoursWorked = 0;
        this.salary = 0;
    }

    performWork(hours){
        return  this.noHoursWorked += hours;
    }

    paySalary(){
        this.salary = this.ratePerHour*this.noHoursWorked;
        console.log(`Salary of $${this.salary} has been paid to ${this.name}`);
    }
}

const Smith = new Employee("Smith", "4548262", 25);

Smith.performWork(8);
Smith.paySalary();







//encapsulation

//polymorphism