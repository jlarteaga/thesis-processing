db.createUser({
	user: 'dsUser', pwd: '123abc.', roles: [{ role: 'readWrite', db: 'dataset' }]
});