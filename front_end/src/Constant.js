
<<<<<<< HEAD
import Nurse from "./image/add nurse.png"
import Pharmacist from "./image/add pharmacist.png"
import Admin from "./image/add admin.png"
import HCP from "./image/add HCP.png"
import Doctor from "./image/add doctor.png"

const CONSTANT={
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
        "to":"Health Care Provider",
        "img":HCP
      }],
=======
const CONSTANT={
>>>>>>> b72134c021fa2cf59bd346c99c5cf51e4b95d639
    "SERVER":{"URL":'http://localhost:8080/'},
    "Doctor":[{
        'name':'fName',
        'type':'text',
        'label':'First Name',
        'required':true,
        'validationType':"name",
      },{
        'name':'lName',
        'type':'text',
        'label':'Last Name',
        'required':true,
        'validationType':"name",
      },{
        'name':'cellPhone1',
        'type':'tel',
        'label':'Cell Phone 1',
        'required':true,
        'validationType':"phone",
      },{
        'name':'cellPhone2',
        'type':'tel',
        'label':'Cell Phone 2(optional)',
        'required':false,
        'validationType':"phone",
      },{
        'name':'city',
        'type':'text',
        'label':'City',
        'required':true,
        'validationType':"name",
      },{
        'name':'subcity',
        'type':'text',
        'label':'Sub City',
        'required':true,
        'validationType':"name",
      },{
        'name':'woreda',
        'type':'number',
        'label':'Woreda',
        'required':true,
        'validationType':"number",
      },{
        'name':'birthPlace',
        'type':'text',
        'label':'Birth Place',
        'required':true,
        'validationType':"name",
      },{
        'name':'dob',
        'type':'Date',
        'label':'Date Of Birth',
        'required':true,
        'validationType':"date",
      },{
        'name':'email',
        'type':'email',
        'label':'Email',
        'required':true,
        'validationType':"email",
      },{
        'name':'gender',
        'type':'select',
        'label':'Gender',
        'required':true,
        'validationType':"gender",
      },{
        'name':'universityName',
        'type':'text',
        'label':'University Name',
        'required':true,
        'validationType':"name",
      },{
        'name':'yearOfGraduation',
        'type':'Date',
        'label':'Year Of Graduaion',
        'required':true,
        'validationType':"year",
      },{
        'name':'CGPA',
        'type':'number',
        'label':'CGPA',
        'required':true,
        'validationType':"grade",
      },{
        'name':'motheTongue',
        'type':'text',
        'label':'Language',
        'required':true,
        'validationType':"name",
      },{
        'name':'speciality',
        'type':'text',
        'label':'Speciality',
        'required':true,
        'validationType':"name",
      },{
        'name':'qualification',
        'type':'text',
        'label':'Qualification',
        'required':true,
        'validationType':"name",
      }],
    "Nurse":[{
        'name':'fName',
        'type':'text',
        'label':'First Name',
        'required':true,
        'validationType':"name",
      },{
        'name':'lName',
        'type':'text',
        'label':'Last Name',
        'required':true,
        'validationType':"name",
      },{
        'name':'cellPhone1',
        'type':'tel',
        'label':'Cell Phone 1',
        'required':true,
        'validationType':"phone",
      },{
        'name':'cellPhone2',
        'type':'tel',
        'label':'Cell Phone 2(optional)',
        'required':false,
        'validationType':"phone",
      },{
        'name':'city',
        'type':'text',
        'label':'City',
        'required':true,
        'validationType':"name",
      },{
        'name':'subcity',
        'type':'text',
        'label':'Sub City',
        'required':true,
        'validationType':"name",
      },{
        'name':'woreda',
        'type':'number',
        'label':'Woreda',
        'required':true,
        'validationType':"number",
      },{
        'name':'birthPlace',
        'type':'text',
        'label':'Birth Place',
        'required':true,
        'validationType':"name",
      },{
        'name':'dob',
        'type':'Date',
        'label':'Date Of Birth',
        'required':true,
        'validationType':"date",
      },{
        'name':'email',
        'type':'email',
        'label':'Email',
        'required':true,
        'validationType':"email",
      },{
        'name':'gender',
        'type':'select',
        'label':'Gender',
        'required':true,
        'validationType':"gender",
      },{
        'name':'universityName',
        'type':'text',
        'label':'University Name',
        'required':true,
        'validationType':"name",
      },{
        'name':'yearOfGraduation',
        'type':'Date',
        'label':'Year Of Graduaion',
        'required':true,
        'validationType':"year",
      },{
        'name':'CGPA',
        'type':'number',
        'label':'CGPA',
        'required':true,
        'validationType':"grade",
      },{
        'name':'motheTongue',
        'type':'text',
        'label':'Language',
        'required':true,
        'validationType':"name",
      },{
        'name':'speciality',
        'type':'text',
        'label':'Speciality',
        'required':true,
        'validationType':"name",
      },{
        'name':'qualification',
        'type':'text',
        'label':'Qualification',
        'required':true,
        'validationType':"name",
      }],
    "Pharmacist":[{
        'name':'fName',
        'type':'text',
        'label':'First Name',
        'required':true,
        'validationType':"name",
      },{
        'name':'lName',
        'type':'text',
        'label':'Last Name',
        'required':true,
        'validationType':"name",
      },{
        'name':'cellPhone1',
        'type':'tel',
        'label':'Cell Phone 1',
        'required':true,
        'validationType':"phone",
      },{
        'name':'cellPhone2',
        'type':'tel',
        'label':'Cell Phone 2(optional)',
        'required':false,
        'validationType':"phone",
      },{
        'name':'city',
        'type':'text',
        'label':'City',
        'required':true,
        'validationType':"name",
      },{
        'name':'subcity',
        'type':'text',
        'label':'Sub City',
        'required':true,
        'validationType':"name",
      },{
        'name':'woreda',
        'type':'number',
        'label':'Woreda',
        'required':true,
        'validationType':"number",
      },{
        'name':'birthPlace',
        'type':'text',
        'label':'Birth Place',
        'required':true,
        'validationType':"name",
      },{
        'name':'dob',
        'type':'Date',
        'label':'Date Of Birth',
        'required':true,
        'validationType':"date",
      },{
        'name':'email',
        'type':'email',
        'label':'Email',
        'required':true,
        'validationType':"email",
      },{
        'name':'gender',
        'type':'select',
        'label':'Gender',
        'required':true,
        'validationType':"gender",
      },{
        'name':'universityName',
        'type':'text',
        'label':'University Name',
        'required':true,
        'validationType':"name",
      },{
        'name':'yearOfGraduation',
        'type':'Date',
        'label':'Year Of Graduation',
        'required':true,
        'validationType':"year",
      },{
        'name':'CGPA',
        'type':'number',
        'label':'CGPA',
        'required':true,
        'validationType':"grade",
      },{
        'name':'motheTongue',
        'type':'text',
        'label':'Language',
        'required':true,
        'validationType':"name",
      },{
<<<<<<< HEAD
=======
        'name':'speciality',
        'type':'text',
        'label':'Speciality',
        'required':true,
        'validationType':"name",
      },{
>>>>>>> b72134c021fa2cf59bd346c99c5cf51e4b95d639
        'name':'qualification',
        'type':'text',
        'label':'Qualification',
        'required':true,
        'validationType':"name",
      }]}
export default CONSTANT ;