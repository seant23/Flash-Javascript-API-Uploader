
var uploader = {
	files: {},
	
	fileSelectedHandler: function (fid, file) {
		var table = $('#fileTable');
		
		var row = {
			tr: document.createElement('tr'),
			check: $('<input checked type="checkbox"/>'),
			check_td: $('<td>' + '</td>'),
			fid_td: $('<td>' + fid + '</td>'),
			name_td: $('<td>' + file.name + '</td>'),
			size_td: $('<td>' + file.size + '</td>'),
			status_td: $('<td>Queued</td>'),
			progress_td: $('<td></td>')
		};
		
		
		$(row.check_td).append(row.check);
		
		$(row.tr).append(row.check_td);
		$(row.tr).append(row.fid_td);
		$(row.tr).append(row.name_td);
		$(row.tr).append(row.size_td);
		$(row.tr).append(row.status_td);
		$(row.tr).append(row.progress_td);
		
		table.append(row.tr);
		
		uploader.files[fid] = file;
		uploader.files[fid].row = row;
		uploader.files[fid].fid = fid;
	},
	
	fileStatusChangeHandler: function (fid, status) {
		uploader.files[fid].row.status_td[0].innerHTML = status;
	},
	
	fileProgressHandler: function(fid, progress) {
		uploader.files[fid].row.progress_td[0].innerHTML = '%' + progress;
	},
	
	buttonSizeChangeHandler: function(width, height) {
		$('#JS_Uploader')[0].width=width;
		$('#JS_Uploader')[0].height=height;
	},
	
	uploadSelected: function() {
		for (var i in uploader.files) {
			var file = uploader.files[i];
			var check = file.row.check[0];
			
			if(check.checked) {
				$('#JS_Uploader')[0].upload(file.fid, "http://gtw.skyseek.com/Tester", "file");
			}			
		}
	},
	
	addTextFilters:function() {
		$('#JS_Uploader')[0].addFilter("Text Files (*.txt)", "*.txt");
	},
	
	init: function() {
		$('#uploadButton')[0].onclick = uploader.uploadSelected;
		$('#textOnlyFilter')[0].onclick = uploader.addTextFilters;
		$('#JS_Uploader')[0].setBrowseButtonImage('http://image.shutterstock.com/display_pic_with_logo/158083/158083,1281360244,1/stock-photo-raster-illustration-browse-button-58715092.jpg');
	}
}


