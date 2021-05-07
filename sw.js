self.addEventListener('push',()=> {
    self.registration.sendNotification('test massage',{});
});