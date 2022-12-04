const axios = require('axios');
const User = require('./../model/userModel');


exports.getLoginForm = (req, res) => {
  res.status(200).render('login', {
    title: 'Log into your account'
  });
};

exports.getSignInForm = (req, res) => {
  res.status(200).render('newUser', {
    title: 'Sign in New User'
  });
};

exports.getCourse = async (req, res) => {
  res.status(200).render('courses', {
    title: `Get Course`
  });
};

exports.createNewCourse = async (req, res) => {
  res.status(200).render('newCourse', {
    title: `Create New Course`
  });
};

// adding the loan list for the views 
exports.getLoan = async (req, res) => {
  const query = await axios.get('http://localhost:3000/api/v1/loans')
  console.log(query.data.loans)
  res.status(200).render('loanlist', {
    title: `Get loanlists`,
    "loans": query.data.loans
  });
};


exports.getCoursesJSON = async (req, res) => {
  res.status(200).render('allCourses', {
    title: `Get courses from JSON`,
    "courses": courses
  });
};


exports.home = async (req, res) => {	
  if (req.session.userId){	
    User.findById(req.session.userId)	
    .exec(function (error, user) {
      console.log(user)	
      if (error) {	
        res.status(200).render('overview', {	
          title: `Over View`	
        	
        });	
      } else {	
        return res.render('overview', { title: 'Over View', name: user.name});	
      }	
      req.session.name = user.name	
    }); 	
  }	
  else {	
    res.status(200).render('overview', {	
    title: `Over View`	
  });	
  }	
};

exports.getMyLoan = async (req, res) => {	
  // console.log(req.session)	
  const query = await axios.get('http://localhost:3000/api/v1/loans/My',{params:{name:req.session.name}})	
  // console.log(query.data.loans)	
  res.status(200).render('myloanlists', {	
    title: `Get loanlists`,	
    "loans": query.data.loans,	
    name: req.session.name	
  });	
};

exports.CreateNewLoan = (req, res) => {	
  res.status(200).render('newLoan', {	
    title: 'Create New Loan',	
    name: req.session.name	
  });	
};

exports.logout = (req, res) => {	
  if (req.session) {	
    // delete session object	
    req.session.destroy(function(err) {	
      if(err) {	
        return next(err);	
      } else {	
        return res.redirect('/');	
      }	
    });	
  }	
};	

// exports.getAllUser = async (req, res) => {	
//    // console.log(req.session)	
//    const query = await axios.get('http://localhost:3000/api/v1/users/')	
//    // console.log(query.data)	
//    res.status(200).render('alluserlists', {	
//      title: `Get userlists`,	
//      "users": query.data.users,	
//      name: req.session.name	
//    });	
// };

// exports.getLoginUser = (req, res) => {
//   const {email, password} = req.body;
//   res.status(200).render('login', {
//     title: 'Log into your account'
//   });
// };

// exports.getLandingPAge = async (req, res) => {
//   res.status(200).render('overview', {
//     title: `Over View`
  
//   });
// };