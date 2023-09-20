const receiveOwner = (req) => {
	const { _id: owner } = req.user;
	const { id } = req.params;

	return {
		_id: id,
		owner,
	}
}

module.exports = receiveOwner;