
export const AuthFetch = async ({
    url,
    method,
    headers,
    body,
    typeResponse
}) => {
    const decifrado = atob(localStorage.getItem('pm-session') || '')
    const datosSession = decifrado == '' ? {} : JSON.parse(decifrado);
    const token = 'Bearer' + ' ' + datosSession?.token;

    const headersDefault = headers || {
        'Content-Type': 'application/json',
    };

// REACT_APP_CLIENT_ID=plamin.web
// REACT_APP_CLIENT_SECRET=plamin.web
// REACT_APP_SCOPE=scope.plamin.web

    const response = await fetch(url, {
        method: method || 'GET',
        headers: {
            ...headersDefault,
            "Authorization": token,
            "grant_type":process.env.REACT_APP_GRANT_TYPE,
            "client_id":process.env.REACT_APP_CLIENT_ID,
            "client_secret":process.env.REACT_APP_CLIENT_SECRET,
        },
        body: body || null
    });
    if ([401].includes(Number(response.status))) {
        localStorage.clear();
        window.location.reload(false);
    }

    return await response[typeResponse || 'json']()
}

export const Fetch = async ({
    url,
    method,
    headers,
    body,
    typeResponse
}) => {

    const headersDefault = headers || {
        'Content-Type': 'application/json',
    };

    const response = await fetch(url, {
        method: method || 'GET',
        headers: {
            ...headersDefault,
        },
        body: body || null
    });

    if ([401].includes(Number(response.status))) {
        localStorage.clear();
        window.location.reload(false);
    }

    return await response[typeResponse || 'json']()
}