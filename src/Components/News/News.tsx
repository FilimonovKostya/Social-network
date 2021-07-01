import React from 'react';

const News = () => {
    return <div>
        <div className="profil">
            <div className="kapak"></div>
            <img className="devrim"
                 src="https://media-exp1.licdn.com/dms/image/C5603AQHEH6iv2qoOUA/profile-displayphoto-shrink_400_400/0/1605084871707?e=1625702400&v=beta&t=cQ4JP2WfFazfXkMvlV-Bf-ZVsphOnmQw-_UMTcXFIwM"/>
            <a className="isim">Devrim Demir</a>
            <p className="turkej">Turkey</p>


            <div className="iletisim">
                <a target="_blank" href="https://www.linkedin.com/in/devrim-demir-84a69b1bb/">
                    <img draggable="false" className="sayfalar"
                         src="https://cdn4.iconfinder.com/data/icons/social-icons-16/512/LinkedIn-128.png"/></a>

                <a target="_blank" href="https://www.blogger.com/profile/00840795839948641627"><img draggable="false" className="sayfalar"
                                                                                                    src="https://cdn4.iconfinder.com/data/icons/social-icons-16/512/Blogger-128.png"/></a>

                <a target="_blank" href="https://www.facebook.com/devrimos"><img draggable="false" className="sayfalar"
                                                                                 src="https://cdn4.iconfinder.com/data/icons/icon-flat-icon-set/50/social-facebook-128.png"/></a>

                <a target="_blank" href="https://www.instagram.com/devrim0s"><img draggable="false" className="sayfalar"
                                                                                  src="https://cdn4.iconfinder.com/data/icons/icon-flat-icon-set/50/social-instagram-128.png"/></a>

                <a target="_blank" href="https://www.twitter.com/devrim0s"><img draggable="false" className="sayfalar"
                                                                                src="https://cdn4.iconfinder.com/data/icons/icon-flat-icon-set/50/social-twitter-128.png"/></a>
            </div>
        </div>


    </div>
};

export default News;
