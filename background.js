

$(document).ready(()=>{

        const newOgretmenler = ogretmenler.map(e=> {
            return {
                isim:e.isim.toLocaleLowerCase(),
                id:e.id
            }
        });

        $(document).on('keyup', k => {


            if(k.target.attributes["ng-model"].value==='render.etudName') {

                let data = $('*[ng-model="render.etudName"]').val().toLocaleLowerCase();
                if(data.length>0)
                {
                    let searchData = newOgretmenler.filter(e=>e.isim.includes(data))
                    let html = '<div style="margin:5px" id="onerilerIlyasBat">';
                    searchData.forEach(v=>{
                        let isim = ogretmenler.filter(e=>e.id===v.id);
                        html += '<a href="javascript://"  class="ogretmenLinkIlyas">'+isim[0].isim+'</a><br/>'
                    })
                    html += '</div>';
                    if($('#ilyasBatContainer').html()!==undefined){
                        $('#ilyasBatContainer').html(html);
                    }else{
                        $('*[ng-model="render.etudName"]').after('<div id="ilyasBatContainer">'+html+'</div>');
                    }
                }
                else{
                    $('#ilyasBatContainer').html('');
                }
                $('.ogretmenLinkIlyas').on('click',e=>{

                    const el = document.querySelector('*[ng-model="render.etudName"]');
                    el.focus();
                    el.select();
                    document.execCommand('insertText', false, e.target.innerText);
                    el.dispatchEvent(new Event('change', {bubbles: true}));
                    $('#ilyasBatContainer').html('');
                })
            }
        })

})
