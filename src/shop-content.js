import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './shop-content.css'


const mockdata = [
    { id: 0, part: 1, name: "いちご食べ放題", price: 1500, stock: 10, goodcount: 0, img: "0.png", img2: "detail0.png", sum: "私たちの農園では「あまおう」、「とちおとめ」、「紅ほっぺ」、「ゆめのか」の４種類のいちごを栽培しています。", comment: [] },
    { id: 1, part: 1, name: "みかん食べ放題", price: 1000, stock: 20, goodcount: 0, img: "1.png", sum: "私たちの農園で提供している「温州ミカン」は皮が薄くてむきやすく、食べやすいのが特徴です！", comment: [] },
    { id: 2, part: 1, name: "梨食べ放題", price: 1300, stock: 20, goodcount: 0, img: "2.png", sum: "品種ごとによって硬さやみずみずしさ・甘さが異なります！いろんな種類の梨をご用意しているので、是非食べに来てください！", comment: [] },
    { id: 3, part: 1, name: "柿食べ放題", price: 1000, stock: 20, goodcount: 0, img: "3.png", sum: "柿には、ビタミンCやカリウム、カルシウム、鉄分などがたっぷり含まれていて、健康に良い効果があります。", comment: [] },
    { id: 4, part: 2, name: "いちごジャム", price: 300, stock: 20, goodcount: 0, img: "4.png", sum: "果肉たっぷりのいちごジャムはパンやお菓子によく合います！自然な甘味が魅力のいちごジャムを是非購入してみてください。", comment: [] },
    { id: 5, part: 2, name: "柿ジャム", price: 500, stock: 20, goodcount: 0, img: "5.png", sum: "柿は、甘味があり、お菓子やパンにトッピングすることがよくあります。また、柿ジャムは、お茶のサイドメニューとしても人気があります。", comment: [] },
    { id: 6, part: 2, name: "ぶどうジュース", price: 150, stock: 40, goodcount: 0, img: "6.png", sum: "ぶどうジュースは、果実の風味を楽しむことができるだけでなく、ビタミンCやカリウムなどを含むため、健康にも良いです。", comment: [] },
    { id: 7, part: 2, name: "りんごジュース", price: 150, stock: 40, goodcount: 0, img: "7.png", sum: "リンゴは果汁がたっぷり含まれており、さっぱりとした味わいが特徴です。果実の風味を楽しむことができるだけでなく、ビタミンCやカリウムなどを含むため、健康にも良いとされています。", comment: [] },
    { id: 8, part: 3, name: "ほし柿ギフト", price: 200, stock: 20, goodcount: 0, img: "8.png", sum: "柿の皮をむいてスライスし、天日干しなどで干すことで乾燥させました。柔らかさと甘さが絶品です。", comment: [] },
    { id: 9, part: 3, name: "いちごギフト", price: 3000, stock: 10, goodcount: 0, img: "9.png", sum: "厳選された大粒のいちごをお届けします。甘さも色も最高ないちごをお世話になっている人にプレゼントしましょう！", comment: [] },
    { id: 10, part: 3, name: "梨の食べ比べギフト", price: 2000, stock: 10, goodcount: 0, img: "10.png", sum: "梨は、品種ごとによって硬さやみずみずしさ・甘さが異なります！いろんな種類の梨をお届けします。", comment: [] },
    { id: 11, part: 3, name: "シーズンギフト", price: 1500, stock: 5, goodcount: 0, img: "11.png", sum: "当園おすすめの旬の果物をお届けします。中身は毎回バラバラで何度でも楽しめる商品となっています。", comment: [] },
]

const cartdata = [
    { id: 0, name: "いちご食べ放題", count: 0, price: 1500, img: "0.png" },
    { id: 1, name: "みかん食べ放題", count: 0, price: 1000, img: "1.png" },
    { id: 2, name: "梨食べ放題", count: 0, price: 1300, img: "2.png" },
    { id: 3, name: "柿食べ放題", count: 0, price: 1000, img: "3.png" },
    { id: 4, name: "いちごジャム", count: 0, price: 300, img: "4.png" },
    { id: 5, name: "柿ジャム", count: 0, price: 500, img: "5.png" },
    { id: 6, name: "ぶどうジュース", count: 0, price: 150, img: "6.png" },
    { id: 7, name: "りんごジュース", count: 0, price: 150, img: "7.png" },
    { id: 8, name: "ほし柿ギフト", count: 0, price: 200, img: "8.png" },
    { id: 9, name: "いちごギフト", count: 0, price: 3000, img: "9.png" },
    { id: 10, name: "梨の食べ比べギフト", count: 0, price: 2000, img: "10.png" },
    { id: 11, name: "シーズンギフト", count: 0, price: 1500, img: "11.png" },
]


const showdata = []


export function GoodsList(props) {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const list1 = mockdata.map(
        (c) => {
            //果物狩り体験
            if (c.part == 1) {
                return (
                    <div className="cardbox2">
                        <div className="card-deck">
                            <div className="card">
                                <h5 className="card-header">
                                    <Link to={'/detail/' + c.id}>
                                        <a className="cardtitle">{c.name}</a>
                                    </Link>
                                </h5>
                                <div className="card-body">
                                    <p>２時間食べ放題</p>
                                    <img className="cardbox2-image" src={"/images/" + c.img} />
                                    <p>１人　{c.price}円</p>
                                    <hr></hr>
                                    <Link to={'/detail/' + c.id}>
                                        <a className="btn-border">注文画面へ</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }
        }
    )

    const list2 = mockdata.map(
        (c) => {
            if (c.part == 2) {
                return (
                    <div className="cardbox2">
                        <div className="card-deck">
                            <div className="card">
                                <h5 className="card-header">
                                    <Link to={'/detail/' + c.id}>
                                        <a className="cardtitle">{c.name}</a>
                                    </Link>
                                </h5>
                                <div className="card-body">
                                    <img className="cardbox2-image" src={"/images/" + c.img} />
                                    <p>１つ　{c.price}円</p>
                                    <hr></hr>
                                    <Link to={'/detail/' + c.id}>
                                        <a className="btn-border">注文画面へ</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }
        }
    )


    const list3 = mockdata.map(
        (c) => {
            if (c.part == 3) {
                return (
                    <div className="cardbox2">
                        <div className="card-deck">
                            <div className="card">
                                <h5 className="card-header">
                                    <Link to={'/detail/' + c.id}>
                                        <a className="cardtitle">{c.name}</a>
                                    </Link>
                                </h5>
                                <div className="card-body">
                                    <img className="cardbox2-image" src={"/images/" + c.img} />
                                    <p>１つ　{c.price}円</p>
                                    <hr></hr>
                                    <Link to={'/detail/' + c.id}>
                                        <a className="btn-border">注文画面へ</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }
        }
    )


    return (
        <div className="products1-list">
            <h1 className="product-list-title">商品一覧</h1>
            <center><h2 className="goodslist-title1">くだもの収穫体験！</h2></center>
            <center><div className="listbox">{list1}</div></center>
            <center><h2 className="goodslist-title2">自家製ジャム＆ジュース</h2></center>
            <center><div className="listbox">{list2}</div></center>
            <center><h2 className="goodslist-title3">オリジナルギフト</h2></center>
            <center><div className="listbox">{list3}</div></center>
        </div>
    )
}



export function Detail(props) {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const params = useParams();  //URLのパラメータを使って書く
    const id = params.id;

    const [item, setItem] = useState(mockdata[id]);
    const [comtext, setCom] = useState('');
    const [stock, setStock] = useState(mockdata[id].stock);

    const [item2, setItem2] = useState(cartdata[id]);
    const [count2, setCount2] = useState(cartdata[id].count);

    const [good, setGood] = useState(mockdata[id].goodcount);

    function handleChange(event) {
        setCom(event.target.value);
    }

    function handleSubmit(event) {
        let copy = Object.assign({}, item);
        copy.comment.push(comtext);
        setItem(copy);

        event.preventDefault();

        setCom(''); //入力欄を空に
    }

    function handleButton_p(event) {
        let copy = Object.assign({}, stock);
        if (item.stock != 0) {
            item.stock--;
            setStock(copy);
            item2.count++;
            setCount2(copy);
        }

        else if (item.stock == 1) {
            item.stock--;
            setStock(copy);
            item2.count++;
            setCount2(copy);
            //画像を売り切れの画像にしたい（残り1個でボタンを押されたら画像に黒マスクとか）
        }

        else {
            //在庫が0だったら何もしない
        }

        // event.setStock(copy); //mockdataのstock
        // event.setCount2(copy);//cartdataのcount
    }

    function handleButton_d(event) {
        let copy = Object.assign({}, stock);
        if (item2.count == 0) {
        }

        else {
            item.stock++;
            setStock(copy);
            item2.count--;
            setCount2(copy);
        }

        // event.setStock(copy); //mockdataのstock
        // event.setCount2(copy);//cartdataのcount
    }

    function handleGoodButton(event) {
        console.log("押された！");
        let copy = Object.assign({}, good);
        if (item.goodcount == 0) {
            item.goodcount = 1;
            setGood(copy);
            event.setGood(copy);
        }
        else {
            item.goodcount = 0;
            setGood(copy);
            event.setGood(copy);
        }

    }


    const comments = item.comment.map((c) => {
        return (
            <div className="balloon5">
                <div className="faceicon">
                    <img src="/images/customer.png" width="50px"></img>
                </div>
                <div className="says">
                    <p>　{c}　</p>
                </div>
            </div>
        )
    })

    if (item.part == 1) {
        return (
            <div className="detailpage1">
                <div className="detail2-title">
                    <div className="part-title">
                        <div className="back-btn">
                            <a className="back-btn2"><Link to="/goodslist">一覧に</Link></a>
                            <a className="back-btn2"><Link to="/goodslist">もどる</Link></a>
                        </div>
                    </div>
                    <h1 className="part-sub">チケットの予約画面です</h1>
                </div>

                <div className="detail-card1">
                    <center>
                        <img className="detail-pic" src={"/images/" + item.img} />
                        <hr></hr>
                        <h> {item.sum} </h>
                        <hr></hr>
                        <h2> {item.name}</h2>
                        <div className="detail-a1">
                            <h6>購入数: {item2.count}人分　</h6>
                            <h6>残り枠: {item.stock}人分</h6>
                        </div>
                    </center>

                    <div className="buycount-btn">
                        <input type="button" onClick={handleButton_d} value="－" className="btn btn-outline-dark" />
                        <p className="number">{item2.count}人分</p>
                        <input type="button" onClick={handleButton_p} value="+" className="btn btn-outline-dark" />
                    </div>

                    {/* <button type="image" alt="いいね！" onclick={handleGoodButton}><img src="/images/0.png" width="25px" height="25px"/></button> */}
                    <div className="goodbutton">
                        <input type="button" onClick={handleGoodButton} value="👍" className="btn btn-outline-dark" />
                        <p className="number2">{item.goodcount}いいね！</p>
                    </div>
                </div>

                <hr></hr>
                <p className="comment-title">お客様の声</p>
                <div className="balloon5">
                    <div className="faceicon">
                        <img src="/images/customer.png" width="50px"></img>
                    </div>
                    <div className="says">
                        <p>　沢山食べれて幸せでした！　</p>
                    </div>
                </div>
                <p>{comments}　</p> {/*コメントの表示*/}

                <form name="aa" onSubmit={handleSubmit}>
                    <input type="text" placeholder="コメントを記入" value={comtext} onChange={handleChange} className="btn btn-outline-dark" />
                    <input type="button" onClick={handleSubmit} value="投稿" className="btn btn-outline-dark" />
                </form>
                <hr></hr>

                <div className='cart-button-a1'><a><Link to="/cart" className="btn btn-outline-dark">カートへ</Link></a></div>
            </div >
        );
    }

    else if (item.part == 2) {
        return (
            <div className="detailpage1">
                <div className="detail2-title">
                    <div className="part-title">
                        <div className="back-btn">
                            <a className="back-btn2"><Link to="/goodslist">一覧に</Link></a>
                            <a className="back-btn2"><Link to="/goodslist">もどる</Link></a>
                        </div>
                    </div>
                    <h1 className="part-sub">オンライン限定商品！</h1>
                </div>

                <div className="detail-card1">
                    <center>
                        <img className="detail-pic" src={"/images/" + item.img} />
                        <hr></hr>
                        <h> {item.sum} </h>
                        <hr></hr>
                        <p> {item.name}</p>
                        <div className="detail-a1">
                            <p>購入数: {item2.count}個　</p>
                            <p>在庫数: {item.stock}個</p>
                        </div>
                    </center>

                    <div className="detailbutton">
                        <div className="buycount-btn">
                            <input type="button" onClick={handleButton_d} value="－" className="btn btn-outline-dark" />
                            <p className="number">{item2.count}個</p>
                            <input type="button" onClick={handleButton_p} value="+" className="btn btn-outline-dark" />
                        </div>

                        {/* <button type="image" alt="いいね！" onclick={handleGoodButton}><img src="/images/0.png" width="25px" height="25px"/></button> */}
                        <div className="goodbutton">
                            <input type="button" onClick={handleGoodButton} value="👍" className="btn btn-outline-dark" />
                            <p className="number2">{item.goodcount}いいね！</p>
                        </div>
                    </div>
                </div>

                <hr></hr>
                <p className="comment-title">お客様の声</p>
                <div className="balloon5">
                    <div className="faceicon">
                        <img src="/images/customer.png" width="50px"></img>
                    </div>
                    <div className="says">
                        <p>　甘さ控えめだけどおいしかった！　</p>
                    </div>
                </div>
                <p>{comments}　</p> {/*コメントの表示*/}

                <form name="aa" onSubmit={handleSubmit}>
                    <input type="text" required="required" placeholder="コメントを記入" value={comtext} onChange={handleChange} className="btn btn-outline-dark"/>
                    <input type="button" onClick={handleSubmit} value="投稿" className="btn btn-outline-dark"/>
                </form>
                <hr></hr>

                <div className='cart-button-a1'><a><Link to="/cart" className="btn btn-outline-dark">カートへ</Link></a></div>
            </div>
        );
    }

    else {
        return (
            <div className="detailpage1">
                <div className="detail2-title">
                    <div className="part-title">
                        <div className="back-btn">
                            <a className="back-btn2"><Link to="/goodslist">一覧に</Link></a>
                            <a className="back-btn2"><Link to="/goodslist">もどる</Link></a>
                        </div>
                    </div>
                    <h1 className="part-sub">ギフト一覧です</h1>
                </div>

                <div className="detail-card1">
                    <center>
                        <img className="detail-pic" src={"/images/" + item.img} />
                        <hr></hr>
                        <h> {item.sum} </h>
                        <hr></hr>
                        <p> {item.name}</p>
                        <div className="detail-a1">
                            <p>購入数: {item2.count}個　</p>
                            <p>在庫数: {item.stock}個</p>
                        </div>
                    </center>

                    <div className="detailbutton">
                        <div className="buycount-btn">
                            <input type="button" onClick={handleButton_d} value="－" className="btn btn-outline-dark" />
                            <p className="number">{item2.count}個</p>
                            <input type="button" onClick={handleButton_p} value="+" className="btn btn-outline-dark" />
                        </div>

                        {/* <button type="image" alt="いいね！" onclick={handleGoodButton}><img src="/images/0.png" width="25px" height="25px"/></button> */}
                        <div className="goodbutton">
                            <input type="button" onClick={handleGoodButton} value="👍" className="btn btn-outline-dark" />
                            <p className="number2">{item.goodcount}いいね！</p>
                        </div>
                    </div>
                </div>

                <hr></hr>
                <p className="comment-title">お客様の声</p>
                <div className="balloon5">
                    <div className="faceicon">
                        <img src="/images/customer.png" width="50px"></img>
                    </div>
                    <div className="says">
                        <p>　誕生日のプレゼントで頂きました！とってもおいしかったです。　</p>
                    </div>
                </div>
                <p>{comments}　</p> {/*コメントの表示*/}

                <form name="aa" onSubmit={handleSubmit}>
                    <input type="text" required="required" placeholder="コメントを記入" value={comtext} onChange={handleChange}　className="btn btn-outline-dark"/>
                    <input type="button" onClick={handleSubmit} value="投稿" className="btn btn-outline-dark"/>
                </form>
                <hr></hr>

                <div className='cart-button-a1'><a><Link to="/cart" className="btn btn-outline-dark">カートへ</Link></a></div>
            </div>
        );
    }

}

export function Cart(props) {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    let sum = 0;
    let i = 0;

    let id; //id変数を宣言

    const [stock3, setStock3] = useState(0);
    const [count3, setCount3] = useState(0);
    const navigate = useNavigate();


    function handleRemove(event) {
        let copy = Object.assign({}, stock3);
        console.log(event.target.id);
        id = event.target.id;

        console.log("idは" + id);

        mockdata[id].stock = mockdata[id].stock + cartdata[id].count;
        cartdata[id].count = 0;

        console.log("mockdataの中身：" + mockdata[id].stock);

        stock3.stock = mockdata[id].stock;
        stock3.count = cartdata[id].count;

        setStock3(copy);
        setCount3(copy);

        event.setStock3(copy); //mockdataのstock
        event.setCount3(copy); //cartdataのcounts

        alert("商品一覧へ戻ってください。")
    }

    const list2 = cartdata.map(
        (c) => {
            if (c.count != 0) {
                if(c.part == 1){
                return (
                    <div className="cart-data">
                        <img className="cartdata-img" src={"/images/" + c.img} width="150px" height="100px" />
                        <div className="cartdata-box">
                            <h3 className="buyName">{c.name}/{c.price}円 × {c.count}人分</h3>
                            <input id={c.id} type="button" onClick={handleRemove} value="削除" className="btn btn-outline-dark" />
                        </div>
                    </div>
                );
                }
                else{
                    return (
                        <div className="cart-data">
                            <img className="cartdata-img" src={"/images/" + c.img} width="150px" height="100px" />
                            <div className="cartdata-box">
                                <h3 className="buyName">{c.name}/{c.price}円 × {c.count}個分</h3>
                                <input id={c.id} type="button" onClick={handleRemove} value="削除" className="btn btn-outline-dark" />
                            </div>
                        </div>
                    );
                }
            }
        }
    )


    for (i = 0; i < 12; i++) {

        sum = sum + ((cartdata[i].count) * ((cartdata[i].price) * 1.1));
        sum = Math.trunc(sum);
    }

    return (
        <div className="cartsence">
            <h1 className="cart-title">カートの中身</h1>
            <div className="part-title">
                <div className="back-btn">
                    <a className="back-btn2"><Link to="/goodslist">商品一覧にもどる</Link></a>
                </div>
            </div>

            <center><p>商品をご購入いただきありがとうございます。</p></center>
            <p>{list2}</p>
            <center><p>※「削除」ボタンを押した後は一度商品一覧に戻ってください。</p></center>
            <hr></hr>
            <div className="sum-total"><p>合計は：{sum}円（税込）</p></div>

        </div>
    );
}