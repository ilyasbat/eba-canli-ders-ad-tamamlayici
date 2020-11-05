$(document).ready(()=>{
    chrome.storage.sync.get(["ebaData"], function(items){
        const DERSLER = items.ebaData.split('\n');
        const ogretmenler = [];
        const newOgretmenler = [];
        DERSLER.forEach((v,i)=>{
            ogretmenler.push({id:i+1,isim:v.trim()})
            newOgretmenler.push({id:i+1,isim:v.toLocaleLowerCase().trim()})
        })
        let index = -1;
        $(document).on('keyup', k => {
            

            if(k.target.attributes["ng-model"].value==='render.etudName') {
                const input = $('*[ng-model="render.etudName"]');
                let data = input.val().toLocaleLowerCase();
                if(data.length>0)
                {
            
                    input.css('border-radius','0');
                    let searchData = newOgretmenler.filter(e=>e.isim.includes(data))
                    if(k.keyCode===40 && index<searchData.length-1){
                        index += 1; 
                    }
                    if(k.keyCode===38 && index>-1){
                        index -= 1; 
                    }
                    if(k.keyCode===13 && index>-1){
                        $('.ogretmenLinkIlyas').eq(index).trigger('click');
                    }
                    if(k.keyCode!==13){
                        let html = '<div  id="onerilerIlyasBat">';
                        searchData.forEach((v,i)=>{
                            let isim = ogretmenler.filter(e=>e.id===v.id);
                            html += '<a href="javascript://"  class="ogretmenLinkIlyas '+(index===i?'secili':'')+'">'+isim[0].isim+'</a>'
                        })
                        html += '</div>';
                        if($('#ilyasBatContainer').html()!==undefined){
                            $('#ilyasBatContainer').html(html);
                        }else{
                            input.after('<div id="ilyasBatContainer">'+html+'</div>');
                        }
                    }
                    else{
                        input.css('border-radius','3px');
                        $('#ilyasBatContainer').html('');
                    }
                }
                else{
                    input.css('border-radius','3px');
                    $('#ilyasBatContainer').html('');
                }
                $('.ogretmenLinkIlyas').on('click',e=>{

                    const el = document.querySelector('*[ng-model="render.etudName"]');
                    el.focus();
                    el.select();
                    document.execCommand('insertText', false, e.target.innerText);
                    el.dispatchEvent(new Event('change', {bubbles: true}));
                    $('#ilyasBatContainer').html('');
                    index = -1;
                })
            }
        })
    })
})
