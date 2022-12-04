const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema(
  {
    name: {
        type: String,
        required: [true, 'A customer must have a name'],
        trim: true,
        maxlength: [40, 'A customer name must have less or equal then 40 characters'],
        minlength: [10, 'A customer name must have more or equal then 10 characters']
    },
    phoneNumber:{
        type: Number,
        validate: {
            validator: function(value){
                return value.toString().length === 10;
            }
        }
    },
    address: {
        type: String,
        trim: true,
        maxlength: [70, 'An address  must have less or equal then 70 characters'],
        minlength: [10, 'A from  must have more or equal then 10 characters']
    },
    loanAmount: {
        type: Number,
        required: [true, 'A loan should have loan amount']
    },
    interest: {
        type: Number,
        required: [true, 'A loan should have loan interest'],
        validate: {
            validator: function(value){
                return value.toString().length < 4;
            }
        }
    },
    loanTermYears: {
        type: Number,
        required: [true, 'A loan should have loan term years'],
    },
    loanType: {
        type: String,
        required: [true, 'A loan must have a type'],
        enum: ['Car', 'Home', 'Personal', 'Education']
    },
    description: {
        type: String,
        trim: true,
        maxlength: [100, 'A description  must have less or equal then 100 characters'],
        minlength: [5, 'A description  must have more or equal then 5 characters']
    },
    startDate: {
        type: String,

        required: [true, 'Loan should have a start date']
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    insertedDate: {
        type: Date,
        default: Date.now
    }
});

const Loan = mongoose.model('Loan', loanSchema);

module.exports = Loan;