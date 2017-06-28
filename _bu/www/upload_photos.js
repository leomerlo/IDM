$(document).ready(function(){

    $('.js_upload_files').on('click', function(e) {
        e.preventDefault();
        $('.dropzone_wrapper').show();
    });


    var zone = $(".dropzone_wrapper");
    var obj = $(".dropzone_wrapper .dotted");

    obj.on('dragenter', function(e) {
        e.stopPropagation();
        e.preventDefault();
        $(this).css('border', '2px solid #0B85A1');
    });

    obj.on('dragover', function(e) {
        e.stopPropagation();
        e.preventDefault();
    });

    obj.on('drop', function(e) {
        $(this).css('border', '2px dotted #0B85A1');
        e.preventDefault();
        var files = e.originalEvent.dataTransfer.files;
        handleFileUpload(files, obj);
    });

    $(document).on('dragenter', function(e) {
        e.stopPropagation();
        e.preventDefault();
    });

    $(document).on('dragover', function(e) {
        e.stopPropagation();
        e.preventDefault();
        obj.css('border', '2px dotted #0B85A1');
    });

    $(document).on('drop', function(e) {
        e.stopPropagation();
        e.preventDefault();
        zone.hide();
    });

    function handleFileUpload(files, obj) {
        for (var i = 0; i < files.length; i++) {
            var reader = new FileReader();
            var uploaded_files = $(".js_uploaded_files");

            reader.onloadend = (function(file) {
                return function(evt){
                    var imgBase64 = evt.target.result;
                    var single_img_type = file.type;
                    var single_img = $("<img>");
                    single_img.attr("src", imgBase64);
                    $('#src_data').val(imgBase64);
                    uploaded_files.append(single_img);            
                };
            })(files[i]);

            reader.readAsDataURL(files[i]);
        }
    }
});
