import $http from '@/assets/js/http'

export function getMenuForUser() {
    return $http.post('device/menu/all-menus');
}

export function getMenu() {
    // return $http.post('device/menu/menu');
    return $http.post('device/menu/all-menus');
}

export function doMenu(data) {
    let url = 'device/menu/menuAdd';
    if (data.id) {
        url = 'device/menu/menuEdit';
    }
    return $http.post(url, data);
}
export function forbid(id, status) {
    return $http.post('device/menu/menuForbid', {id: id, status: status});
}

export function resume(id, status) {
    return $http.post('device/menu/menuResume', {id: id, status: status});
}
export function delMenu(id) {
    return $http.post('device/menu/menuDel', {id: id});
}

