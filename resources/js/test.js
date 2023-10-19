$(document).ready(function(){
    loadSort();
});

//tablesorter読み込み用
function loadSort(){
    $('#pr-table').tablesorter();
}

$(function(){
    console.log('読み込みOK');
    

    //検索ボタン押下イベント
    $('#search-btn').on('click', function(e){
        console.log('検索押した');
        e.preventDefault();

        let formData = $('#search-form').serialize();

        $.ajax({
            url:'lists',
            type:'GET',
            data: formData,
            dataType: 'html'
        }).done(function(data){
            console.log('成功');
            let newTable = $(data).find('#products-table');
            $('#products-table').html(newTable);
            loadSort();
        }).fail(function(){
            alert('通信失敗');
        })
    })

    //削除ボタン押下イベント
    $('.delete-btn').on('click', function(e){
        e.preventDefault();
        let deleteConfirm = confirm('削除しますか？');

        if(deleteConfirm == true){
            let clickEle = $(this);
            let deleteId = clickEle.data('delete-id');
            console.log(deleteId);

            $.ajax({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                url:'products/' + deleteId,
                type:'POST',
                data:{
                    '_method':'DELETE'
                }
            }).done(function(){
                console.log('削除成功');
                clickEle.parents('tr').remove();
                loadSort();
            }).fail(function(){
                console.log('削除失敗');
            })
        }else{
            e.preventDefault();
        }
        
    })
})