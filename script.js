

let head= document.createElement('h2')
head.innerHTML=`Survey Form`
document.body.append(head)

let form= document.createElement('div')
form.innerHTML=`<form>
<div class="form-group">
    <label for="fname">First Name</label>
    <input type="name" class="form-control" id="fname" aria-describedby="">
</div>
<div class="form-group">
    <label for="lname">Last Name</label>
    <input type="name" class="form-control" id="lname" aria-describedby="">
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="gender" id="male" value="male">
  <label class="form-check-label" for="male">
    Male
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="gender" id="female" value="female">
  <label class="form-check-label" for="female">
    Female
  </label>
</div>
<div class="form-group">
    <label for="address">Address</label>
    <input type="name" class="form-control" id="address" aria-describedby="">
</div>
<div class="form-group">
    <label for="pincode">Pincode</label>
    <input type="number" class="form-control" id="pin" aria-describedby="">
</div>
<div class="form-group">
    <label for="state">State</label>
    <input type="name" class="form-control" id="state" aria-describedby="">
</div>
<div class="form-group">
    <label for="country">Country</label>
    <input type="name" class="form-control" id="country" aria-describedby="">
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" name="fooditems" value="Idly">
  <label class="form-check-label" for="inlineCheckbox1">Idly</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" name="fooditems" value="Dosa">
  <label class="form-check-label" for="inlineCheckbox2">Dosa</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" name="fooditems" value="Poori">
  <label class="form-check-label" for="inlineCheckbox3">Poori</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" name="fooditems" value="Pongal">
  <label class="form-check-label" for="inlineCheckbox4">Pongal</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" name="fooditems" value="Vadai">
  <label class="form-check-label" for="inlineCheckbox5">Vada</label>
</div><br><br>
<button type="submit" class="btn btn-primary onClick="formSum()">Submit</button>
</form>`
form.setAttribute("class","container-fluid")
document.body.append(form)

let table=document.createElement('table')
table.innerHTML=`
<thead>
  <tr>
    <th scope="col">#</th>
    <th scope="col">First Name</th>
    <th scope="col">Last Name</th>
    <th scope="col">Gender</th>
    <th scope="col">Address</th>
    <th scope="col">Pincode</th>
    <th scope="col">State</th>
    <th scope="col">Country</th>
    <th scope="col">Food Items</th>
  </tr>
</thead>
<tbody>
  <tr>
    <th scope="row">1</th>
    <td id="td1"></td>
    <td id="td2"></td>
    <td id="td3"></td>
    <td id="td4"></td>
    <td id="td5"></td>
    <td id="td6"></td>
    <td id="td7"></td>
    <td id="td8"></td>
  </tr>
</tbody>`

table.setAttribute("class","table table-bordered")
document.body.append(table)


function formSum(e){
  e.preventDefault()
  let td1=document.getElementById("td1")
  td1.innerHTML=document.getElementById("fname").value
  console.log(td1)

  let td2=document.getElementById("td2")
  td2.innerHTML=document.getElementById("lname").value
  console.log(td2)

  let td4=document.getElementById("td4")
  td4.innerHTML=document.getElementById("address").value
  console.log(td4)

  let td5=document.getElementById("td5")
  td5.innerHTML=document.getElementById("pin").value
  console.log(td5)

  let td6=document.getElementById("td6")
  td6.innerHTML=document.getElementById("state").value
  console.log(td6)

  let td7=document.getElementById("td7")
  td7.innerHTML=document.getElementById("country").value
  console.log(td7)

  if(document.getElementById("male").checked){
    var td3=document.getElementById("td3")
    td3.innerHTML="male"
  }
  else if(document.getElementById("female").checked){
    var td3=document.getElementById("td3")
    td3.innerHTML="female"
  }

  var td8=document.getElementById("td8")
  var checkbox =document.getElementsByName("fooditems")
  var checkeditems= 0;
  var list=[];

  for(let i=0;i<checkbox.length;i++){
    if(checkbox[i].checked){
      checkeditems++;
      list.push(checkbox[i])
    }
  }
  td8.innerHTML=list;
  if(list.length<2){
    alert("please select atleast 2")
    td8.innerHTML=""
  }
  }
 
