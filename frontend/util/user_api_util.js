export const createUser = user => (
  $.ajax({
    url: "/users",
    method: "POST",
    data: user
  })
)

export const destroyUser = id => (
  $.ajax({
    url: `/users/${id}`,
    method: "DELETE"
  })
);

export const updateUser = user => (
    $.ajax({
        url: `/users/${user.id}`,
        method: 'PATCH',
        data: user
    })
);
