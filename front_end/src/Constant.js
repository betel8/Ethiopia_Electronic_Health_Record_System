
import Nurse from "./image/add nurse.png"
import Pharmacist from "./image/add pharmacist.png"
import Admin from "./image/add admin.png"
import HCP from "./image/add HCP.png"
import Doctor from "./image/add doctor.png"

const CONSTANT={
  "ChangePassword":[
    {
      'name':'oldPassword',
      'type':'password',
      'required':true,
      'validationType':'password',
      'label':'Current Password' ,  
   },{
      'name':'newPassword',
      'type':'password',
      'required':true,
      'validationType':'passsword',
      'label':'New Password' ,  
   },{
      'name':'confirmNewPassword',
      'type':'password',
      'required':true,
      'validationType':'password',
      'label':'Confirm Password' ,  
 }
],
  "ForgetPassword":[
    {
      'name':'email',
      'type':'email',
      'required':true,
      'validationType':'email',
      'label':'Email:' ,  
   }],
  "FirstTimePasswordChangeInput":[{
      'name':'newPassword',
      'type':'password',
      'required':true,
      'validationType':'password',
      'label':'New Password' ,  
   },{
      'name':'confirmNewPassword',
      'type':'password',
      'validationType':'passwordChange',
      'label':'Confirm New Password:',
      'required':true,
    }],
  "homeContent":[{
        "to":"Doctor",
        "img":Doctor
      },{
        "to":"Nurse",
        "img":Nurse
      },{
        "to":"Pharmacist",
        "img":Pharmacist
      },{
        "to":"Admin",
        "img":Admin
      },{
        "to":"HCP",
        "img":HCP
      }],
    "LoginInput":[
      {
        'name':'username',
        'type':'email',
        'required':true,
        'validationType':'email',
        'label':'Email' ,  
      },{
        'name':'password',
        'type':'password',
        'validationType':'password',
        'label':'Password',
        'required':true,
    }],
    "SERVER":{"URL":'http://localhost:8080/'},
    "Doctor":[{
        'name':'fName',
        'type':'text',
        'label':'First Name',
        'required':true,
        'validationType':"name",
        'category':'personalDetail'        
      },{
        'name':'lName',
        'type':'text',
        'label':'Last Name',
        'required':true,
        'validationType':"name",
        'category':'personalDetail' 
      },{
        'name':'cellPhone1',
        'type':'tel',
        'label':'Cell Phone 1',
        'required':true,
        'validationType':"phone",
        'category':'personalDetail' 
      },{
        'name':'cellPhone2',
        'type':'tel',
        'label':'Cell Phone 2(optional)',
        'required':false,
        'validationType':"phone",
        'category':'personalDetail' 
      },{
        'name':'city',
        'type':'text',
        'label':'City',
        'required':true,
        'validationType':"name",
        'category':'personalDetail' 
      },{
        'name':'subCity',
        'type':'text',
        'label':'Sub City',
        'required':true,
        'validationType':"name",
        'category':'personalDetail' 
      },{
        'name':'woreda',
        'type':'number',
        'label':'Woreda',
        'required':true,
        'validationType':"number",
        'category':'personalDetail' 
      },{
        'name':'birthPlace',
        'type':'text',
        'label':'Birth Place',
        'required':true,
        'validationType':"name",
        'category':'personalDetail' 
      },{
        'name':'dob',
        'type':'Date',
        'label':'Date Of Birth',
        'required':true,
        'validationType':"date",
        'category':'personalDetail' 
      },{
        'name':'email',
        'type':'email',
        'label':'Email',
        'required':true,
        'validationType':"email",
        'category':'user' 
      },{
        'name':'gender',
        'type':'select',
        'label':'Gender',
        'required':true,
        'validationType':"gender",
        'options':["","Female","Male"],
        'category':'personalDetail' 
      },{
        'name':'motherTongue',
        'type':'text',
        'label':'Language',
        'required':true,
        'validationType':"name",
        'category':'personalDetail' 
      },{
        'name':'universityName',
        'type':'text',
        'label':'University Name',
        'required':true,
        'validationType':"name",
        'category':'academicDetail' 
      },{
        'name':'yearOfGraduation',
        'type':'Date',
        'label':'Year Of Graduaion',
        'required':true,
        'validationType':"year",
        'category':'academicDetail' 
      },{
        'name':'CGPA',
        'type':'text',
        'label':'CGPA',
        'required':true,
        'validationType':"grade",
        'category':'academicDetail' 
      },{
        'name':'qualification',
        'type':'text',
        'label':'Qualification',
        'required':true,
        'validationType':"name",
        'category':'academicDetail',
      }],
      "Admin":[{
        'name':'fName',
        'type':'text',
        'label':'First Name',
        'required':true,
        'validationType':"name",
        'category':'personalDetail'        
      },{
        'name':'lName',
        'type':'text',
        'label':'Last Name',
        'required':true,
        'validationType':"name",
        'category':'personalDetail' 
      },{
        'name':'cellPhone1',
        'type':'tel',
        'label':'Cell Phone 1',
        'required':true,
        'validationType':"phone",
        'category':'personalDetail' 
      },{
        'name':'cellPhone2',
        'type':'tel',
        'label':'Cell Phone 2(optional)',
        'required':false,
        'validationType':"phone",
        'category':'personalDetail' 
      },{
        'name':'city',
        'type':'text',
        'label':'City',
        'required':true,
        'validationType':"name",
        'category':'personalDetail' 
      },{
        'name':'subCity',
        'type':'text',
        'label':'Sub City',
        'required':true,
        'validationType':"name",
        'category':'personalDetail' 
      },{
        'name':'woreda',
        'type':'number',
        'label':'Woreda',
        'required':true,
        'validationType':"number",
        'category':'personalDetail' 
      },{
        'name':'birthPlace',
        'type':'text',
        'label':'Birth Place',
        'required':true,
        'validationType':"name",
        'category':'personalDetail' 
      },{
        'name':'dob',
        'type':'Date',
        'label':'Date Of Birth',
        'required':true,
        'validationType':"date",
        'category':'personalDetail' 
      },{
        'name':'email',
        'type':'email',
        'label':'Email',
        'required':true,
        'validationType':"email",
        'category':'user' 
      },{
        'name':'gender',
        'type':'select',
        'label':'Gender',
        'required':true,
        'validationType':"gender",
        'options':["","Female","Male"],
        'category':'personalDetail' 
      },{
        'name':'motherTongue',
        'type':'text',
        'label':'Language',
        'required':true,
        'validationType':"name",
        'category':'personalDetail' 
      },{
        'name':'universityName',
        'type':'text',
        'label':'University Name',
        'required':true,
        'validationType':"name",
        'category':'academicDetail' 
      },{
        'name':'yearOfGraduation',
        'type':'Date',
        'label':'Year Of Graduaion',
        'required':true,
        'validationType':"year",
        'category':'academicDetail' 
      },{
        'name':'CGPA',
        'type':'text',
        'label':'CGPA',
        'required':true,
        'validationType':"grade",
        'category':'academicDetail' 
      },{
        'name':'qualification',
        'type':'text',
        'label':'Qualification',
        'required':true,
        'validationType':"name",
        'category':'academicDetail',
      },{
        'name':'DateOfEmployment',
        'type':'Date',
        'label':'Date of Employment',
        'required':true,
        'validationType':"date",

      }],
    "Nurse":[{
      'name':'fName',
      'type':'text',
      'label':'First Name',
      'required':true,
      'validationType':"name",
      'category':'personalDetail'        
    },{
      'name':'lName',
      'type':'text',
      'label':'Last Name',
      'required':true,
      'validationType':"name",
      'category':'personalDetail' 
    },{
      'name':'cellPhone1',
      'type':'tel',
      'label':'Cell Phone 1',
      'required':true,
      'validationType':"phone",
      'category':'personalDetail' 
    },{
      'name':'cellPhone2',
      'type':'tel',
      'label':'Cell Phone 2(optional)',
      'required':false,
      'validationType':"phone",
      'category':'personalDetail' 
    },{
      'name':'city',
      'type':'text',
      'label':'City',
      'required':true,
      'validationType':"name",
      'category':'personalDetail' 
    },{
      'name':'subCity',
      'type':'text',
      'label':'Sub City',
      'required':true,
      'validationType':"name",
      'category':'personalDetail' 
    },{
      'name':'woreda',
      'type':'number',
      'label':'Woreda',
      'required':true,
      'validationType':"number",
      'category':'personalDetail' 
    },{
      'name':'birthPlace',
      'type':'text',
      'label':'Birth Place',
      'required':true,
      'validationType':"name",
      'category':'personalDetail' 
    },{
      'name':'dob',
      'type':'Date',
      'label':'Date Of Birth',
      'required':true,
      'validationType':"date",
      'category':'personalDetail' 
    },{
      'name':'email',
      'type':'email',
      'label':'Email',
      'required':true,
      'validationType':"email",
      'category':'user' 
    },{
      'name':'gender',
      'type':'select',
      'label':'Gender',
      'required':true,
      'validationType':"gender",
      'options':["","Female","Male"],
      'category':'personalDetail' 
    },{
      'name':'motherTongue',
      'type':'text',
      'label':'Language',
      'required':true,
      'validationType':"name",
      'category':'personalDetail' 
    },{
      'name':'universityName',
      'type':'text',
      'label':'University Name',
      'required':true,
      'validationType':"name",
      'category':'academicDetail' 
    },{
      'name':'yearOfGraduation',
      'type':'Date',
      'label':'Year Of Graduaion',
      'required':true,
      'validationType':"year",
      'category':'academicDetail' 
    },{
      'name':'CGPA',
      'type':'text',
      'label':'CGPA',
      'required':true,
      'validationType':"grade",
      'category':'academicDetail' 
    },{
      'name':'qualification',
      'type':'text',
      'label':'Qualification',
      'required':true,
      'validationType':"name",
      'category':'academicDetail',
    }],
    "Pharmacist":[{
      'name':'fName',
      'type':'text',
      'label':'First Name',
      'required':true,
      'validationType':"name",
      'category':'personalDetail'        
    },{
      'name':'lName',
      'type':'text',
      'label':'Last Name',
      'required':true,
      'validationType':"name",
      'category':'personalDetail' 
    },{
      'name':'cellPhone1',
      'type':'tel',
      'label':'Cell Phone 1',
      'required':true,
      'validationType':"phone",
      'category':'personalDetail' 
    },{
      'name':'cellPhone2',
      'type':'tel',
      'label':'Cell Phone 2(optional)',
      'required':false,
      'validationType':"phone",
      'category':'personalDetail' 
    },{
      'name':'city',
      'type':'text',
      'label':'City',
      'required':true,
      'validationType':"name",
      'category':'personalDetail' 
    },{
      'name':'subCity',
      'type':'text',
      'label':'Sub City',
      'required':true,
      'validationType':"name",
      'category':'personalDetail' 
    },{
      'name':'woreda',
      'type':'number',
      'label':'Woreda',
      'required':true,
      'validationType':"number",
      'category':'personalDetail' 
    },{
      'name':'birthPlace',
      'type':'text',
      'label':'Birth Place',
      'required':true,
      'validationType':"name",
      'category':'personalDetail' 
    },{
      'name':'dob',
      'type':'Date',
      'label':'Date Of Birth',
      'required':true,
      'validationType':"date",
      'category':'personalDetail' 
    },{
      'name':'email',
      'type':'email',
      'label':'Email',
      'required':true,
      'validationType':"email",
      'category':'user' 
    },{
      'name':'gender',
      'type':'select',
      'label':'Gender',
      'required':true,
      'validationType':"gender",
      'options':["","Female","Male"],
      'category':'personalDetail' 
    },{
      'name':'motherTongue',
      'type':'text',
      'label':'Language',
      'required':true,
      'validationType':"name",
      'category':'personalDetail' 
    },{
      'name':'universityName',
      'type':'text',
      'label':'University Name',
      'required':true,
      'validationType':"name",
      'category':'academicDetail' 
    },{
      'name':'yearOfGraduation',
      'type':'Date',
      'label':'Year Of Graduaion',
      'required':true,
      'validationType':"year",
      'category':'academicDetail' 
    },{
      'name':'CGPA',
      'type':'text',
      'label':'CGPA',
      'required':true,
      'validationType':"grade",
      'category':'academicDetail' 
    },{
      'name':'qualification',
      'type':'text',
      'label':'Qualification',
      'required':true,
      'validationType':"name",
      'category':'academicDetail',
    }],

    "HCP":[
      {
        'name':'companyName',
        'type':'text',
        'label':'Company Name',
        'required':true,  
        'validationType':"name" 
    },{
        'name':'workPhone',
        'type':'tel',
        'label':'WorkPhone',
        'required':true,  
        'validationType':"phone"
      },{
        'name':'city',
        'type':'text',
        'label':'City',
        'required':true,  
        'validationType':"name"
      },{
        'name':'subCity',
        'type':'text',
        'label':'Sub City',
        'required':true,  
        'validationType':"name"
      },{
        'name':'woreda',
        'type':'number',
        'label':'Woreda',
        'required':true,  
        'validationType':"number"
      },{
        'name':'speciality',
        'type':'text',
        'label':'Speciality',
        'required':true,  
        'validationType':"name"   
    },
    {
        'name':'owner',
        'type':'email',
        'label':'Email',
        'required':true,  
        'validationType':"name"   
    },
    {
        'name':'Fyear',
        'type':'Date',
        'label':'Foundation Year'
    }
    
  ]}
export default CONSTANT ;