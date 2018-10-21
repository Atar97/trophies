export const login = user => (
    $.ajax({
        url: '/session',
        method: 'POST',
        data: user,
    })
);

export const logout = () => (
    $.ajax({
        url: '/session',
        method: 'DELETE',
    })
);
