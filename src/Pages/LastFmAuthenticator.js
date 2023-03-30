import MD5 from "crypto-js/md5";
import { Navigate } from "react-router-dom";
import React from "react";
import { useEffect, useState } from "react";

function LastFmAuthenticator() {
    const [complete, setComplete] = useState(false);

    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');

    useEffect(() => {
        const setData = async () => {
            if (token) {
                const hash = MD5(`api_keyf8b32377438bdf91d564673f48fba700methodauth.getSessiontoken${token}1a7a3c0954170c39e06a9f6c1a5d9358`);
                const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=auth.getSession&api_key=f8b32377438bdf91d564673f48fba700&token=${token}&format=json&api_sig=${hash}`);
                const data = await response.json();

                if (!data.error) {
                    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
                    if (currentUser)
                    currentUser = Object.assign(currentUser, {
                        lastFMname: data.session.name,
                        lastSessionKey: data.session.key,
                        isLinked: true,
                    });


                    localStorage.setItem('currentUser', JSON.stringify(currentUser))
                    window.location.reload(false);
                }

            }

            setComplete(true);
        }

        setData();
    }, [])

    return complete ? <Navigate to='/mymusic' />  : <></>;
}
export default LastFmAuthenticator;