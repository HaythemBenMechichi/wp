
const webpush=require('web-push');
const publicVapidKey=
'BA3UlRctKiToEzUGp09FWKokBrP05aqXQpvOMEVWbMIimTK-0B3Z2heZS6e485yBjN3ArV-cCJTwFcZq6edJ-jI';
const privateVapidKey=
'4QeUx_BSrdYSnFT2Y0Qko-pMz3hvCG25CMWOnajAkpQ';



// async function send()
// {
//     const register= await navigator.serviceWorker.register('/worker.js',{
//         scope:'/'
//     });
//     const subscription= await  register.pushManager.subscribe({
//         userVisibleOnly:true,
//         applicationServerKey:publicVapidKey

//     })
// }

webpush.setVapidDetails('mailto:test@test.com', publicVapidKey,privateVapidKey);

    const payload= JSON.stringify({ title : 'Push Test' });
    webpush.sendNotification(sub,payload).catch(err => console.error(errs))


    
