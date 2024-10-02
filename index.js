/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

var jpdbBaseUrl = 'http://api.login2explore.com:5577';
var jpdbIRL = '/api/irl';
var jpdbIML = '/api/iml';
var DBName = 'SCHOOL-DB';
var RelationName = 'STUDENT-TABLE';
var connToken = '90932446|-31949270199827802|90955288';

$('#rollno').focus();
$('#fulname').prop("disabled", true);
$('#cls').prop("disabled", true);
$('#brdate').prop("disabled", true);
$('#add').prop("disabled", true);
$('#enrolldate').prop("disabled", true);

function saveRecNo2LS(jsonObj) {
    var lvData = JSON.parse(jsonObj.data);
    localStorage.setItem("recno", lvData.rec_no);
}

function getrollnoAsJsonObj() {
    var rollno = $('#rollno').val();
    $('#fulname').prop("disabled", false);
    $('#cls').prop("disabled", false);
    $('#brdate').prop("disabled", false);
    $('#add').prop("disabled", false);
    $('#enrolldate').prop("disabled", false);
    var jsonStr = {
        rollno: rollno
    };
    return JSON.stringify(jsonStr);
}

function fillData(jsonObj) {
    saveRecNo2LS(jsonObj);
    var record = JSON.parse(jsonObj.data).record;
    $('#fulname').val(record.name);
    $('#cls').val(record.class);
    $('#brdate').val(record.birthDate);
    $('#add').val(record.address);
    $('#enrolldate').val(record.enrollmentDate);
}

function resetForm() {
    $('#rollno').val('');
    $('#fulname').val('');
    $('#cls').val('');
    $('#brdate').val('');
    $('#add').val('');
    $('#enrolldate').val('');
    $('#rollno').prop("disabled", false);
    $('#fulname').prop("disabled", true);
    $('#cls').prop("disabled", true);
    $('#brdate').prop("disabled", true);
    $('#add').prop("disabled", true);
    $('#enrolldate').prop("disabled", true);
    $('#save').prop("disabled", true);
    $('#update').prop("disabled", true);
    $('#reset').prop("disabled", true);    
    $('#rollno').focus();
}

function validateData() {
    var rollno, fulname, cls, brdate, add, enrolldate;
    rollno = $('#rollno').val();
    fulname = $('#fulname').val();
    cls = $('#cls').val();
    brdate = $('#brdate').val();
    add = $('#add').val();
    enrolldate = $('#enrolldate').val();
    
    if (rollno === '') {
        alert('Student roll number missing');
        $('#rollno').focus();
        return '';
    }
    if (fulname === '') {
        alert('Student name missing');
        $('#fulname').focus();
        return '';
    }
    if (cls === '') {
        alert('Student class missing');
        $('#cls').focus();
        return '';
    }
    if (brdate === '') {
        alert(' Birth-Date missing');
        $('#brdate').focus();
        return '';
    }
    if (add === '') {
        alert('Address missing');
        $('#add').focus();
        return '';
    }
    if (enrolldate === '') {
        alert('Enrollment-Date missing');
        $('#enrolldate').focus();
        return '';
    }
    
    var jsonStrObj = {
        rollno: rollno,
        name: fulname,
        class: cls,
        birthDate: brdate,
        address: add,
        enrollmentDate: enrolldate
    };
    return JSON.stringify(jsonStrObj);
}

function getStud() {
    var rollnoJsonObj = getrollnoAsJsonObj();
    var getRequest = createGET_BY_KEYRequest(connToken, DBName, RelationName, rollnoJsonObj);
    jQuery.ajaxSetup({async: false});
    var resJsonObj = executeCommandAtGivenBaseUrl(getRequest, jpdbBaseUrl, jpdbIRL);
    jQuery.ajaxSetup({async: true});
    if (resJsonObj.status === 400) {
        $('#save').prop("disabled", false);
        $('#reset').prop("disabled", false);
        $('#fulname').focus();
        
    }   else if (resJsonObj.status === 200) {
        
        $('#rollno').prop("disabled", true);
        fillData(resJsonObj);
        
        $('#update').prop("disabled", false);
        $('#reset').prop("disabled", false);
        $('#fulname').focus();
    }
}

function saveData() {
    var jsonStrObj = validateData();
    if (jsonStrObj === '') {
        return '';
    }
    var putRequest = createPUTRequest(connToken, jsonStrObj, DBName, RelationName);
    jQuery.ajaxSetup({async: false});
    var resJsonObj = executeCommandAtGivenBaseUrl(putRequest, jpdbBaseUrl, jpdbIML);
    jQuery.ajaxSetup({async: true});
    resetForm();
    $('#rollno').focus();
}

function updateData() {
    $('#update').prop("disabled", true);
    jsonChg = validateData();
    var updateRequest = createUPDATERecordRequest(connToken, jsonChg, DBName, RelationName, localStorage.getItem("recno"));
    jQuery.ajaxSetup({async: false});
    var resJsonObj = executeCommandAtGivenBaseUrl(updateRequest, jpdbBaseUrl, jpdbIML);
    jQuery.ajaxSetup({async: true});
    console.log(resJsonObj);
    resetForm();
    $('#rollno').focus();
}


