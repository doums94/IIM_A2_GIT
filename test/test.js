import test from 'ava';
import req from 'requisition';

test("get all musics", async ()=>{
        const res = await req('localhost:8888/api/musique.php');
        const body = await res.json();
        t.truthy(body);
        t.truthy(body,length);
        const music = body [0];
        t.truthy(music.time);
        t.truthy(music.time);
        t.is(music.name,"Love Me Tender");
        t.is(music.time,182)

    }
);

test("get Location", (t)=>{
    return getLocation().then((location)=>{
        t.is(location.city,"Paris");
    }).catch(err=>{
        t.fail();
    })
})

let pika;

test.before("hello world",()=>{
    pika ="chu"
});

test("hello world 2", (t)=>{
        t.is(pika,"chu");
    }
);

test("je suis trop fort",(t)=>{
    t.is(pika,"chu");
});

//[1,2,4,7,1,79,4,2,7].sort(function (a,b) {
//   return a-b;
//});
//[1,2,4,7,1,79,4,2,7].sort((a,b)=>a-b);

//let h = "Mutafuka";
//function hello()

//{
//console.log(this.h)
//}

//const  hello =()=>console.log(this.h);