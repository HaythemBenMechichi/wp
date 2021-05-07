
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
    let sub={"endpoint":"https://fcm.googleapis.com/fcm/send/dZ7srcbYvS0:APA91bGcQN1Hm_85Zg9xn0-m4VsAhAjUYzhivtUx52rxxZXc66XrRwcSNdV_OQXyPFC5MMMZclhzROK_DJFsgQINZYZZjSwNUNvsquc9A7UHZ8NZPZqYBsP20TBMhmN4lOgihbF1ishY","expirationTime":null,"keys":{"p256dh":"BN1hvFNC7L7lN6xmNBzAHn_KAKv4zbGgo2XMpSGEbQR6feA-JJOveioCYGYpxK3_6cmDGcdTmWc_2N5qfGFVOo8","auth":"NDQm24N9qx1BuI7Np5zz2w"}};
    webpush.sendNotification(sub,"message").catch(err => console.error(err))


    
