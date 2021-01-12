const API = require('call-of-duty-api')({platform: "battle"});

const email = 'pixigij745@vu38.com';
const password = 'Magic817$';
const username = 'LoganPaul123#3936380';

const test = async () => {
    try {
        await API.login('pixigij745@vu38.com', 'Magic817$');
        let data = await API.MWcombatwz(username, 'acti');
        console.log(data.matches[0].playerStats);
    } catch (error) {
        console.log(error);
    }
    ;
}

test();