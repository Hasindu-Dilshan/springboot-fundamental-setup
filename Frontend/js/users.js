getAllUsers();

function saveUser() {
    let id=$('#exampleId').val();
    let name=$('#exampleName').val();
    let address=$('#exampleAddress').val();

    $.ajax({
        method:"POST",
        contentType:"application/json",
        url:"http://localhost:8080/api/v1/user/saveUser",
        async:true,
        data:JSON.stringify({
            "id": id,
            "name": name,
            "address": address
        }),
        dataType: "json",
        
        success: function (data) {
            alert("saved")
            getAllUsers()
			clearFields()
        },
        error: function (xhr, exception) {
            alert("Error")
            console.log(exception)
        }
    })
}

function updateUser() {
    let id=$('#exampleId').val();
	let name=$('#exampleName').val();
	let address=$('#exampleAddress').val();

	$.ajax({
		method:"PUT",
		contentType:"application/json",
		url:"http://localhost:8080/api/v1/user/updateUser",
		async:true,
		data:JSON.stringify({
			"id":id,
			"name":name,
			"address":address
		}),
		success: function(data) {
			alert("Updated")
			getAllUsers()
			clearFields()
		},
		error: function(xhr, exception) {
			alert("Error")
		}
	})
}

function deleteUser() {
	let id=$('#exampleId').val();
    let name=$('#exampleName').val();
	let address=$('#exampleAddress').val();

	$.ajax({
		method:"DELETE",
        contentType:"application/json",
		url:"http://localhost:8080/api/v1/user/deleteUser",
		async:true,
        data:JSON.stringify({
			"id":id,
			"name":name,
			"address":address
		}),
		success: function (data) {
			alert("Deleted")
			getAllUsers()
			clearFields()
		},
		error: function (xhr, exception) {
			alert("Error")
		}
	})
}

function getAllUsers(){
	
	$.ajax({
		method:"GET",
		url:"http://localhost:8080/api/v1/user/getUsers",
		async:true,
		success: function(response) {
			$('#userTable').empty()
			$.each(response, function(index, element) {
				let id = element.id;
				let name = element.name;
				let address = element.address;

				var row=`<tr><td>${id}</td><td>${name}</td><td>${address}</td></tr>`;
				$('#userTable').append(row);
			});
		},
		error: function (xhr, exception) {
			alert("Error")
		}
	})
}

$(document).ready(function () {
	$(document).on('click', '#userTable tr', function() {
		var col0 = $(this).find('td:eq(0)').text();
		var col1 = $(this).find('td:eq(1)').text();
		var col2 = $(this).find('td:eq(2)').text();
		var col3 = $(this).find('td:eq(3)').text();

		$('#exampleId').val(col0);
		$('#exampleName').val(col1);
		$('#exampleAddress').val(col2);

		$('#exampleId'). attr('disabled','disabled');
	})
})

function clearFields() {
	document.getElementById('exampleId').value = "";
    document.getElementById('exampleName').value = "";
	document.getElementById('exampleAddress').value = "";

	document.getElementById('exampleId').disabled = false;
}