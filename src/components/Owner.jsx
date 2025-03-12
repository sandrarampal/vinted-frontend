const Owner = ({ owner }) => {
  return (
    <div className="owner">
      {owner.account.avatar && (
        <img src={owner.account.avatar.secure_url} alt="" />
      )}
      <p>{owner.account.username}</p>
    </div>
  );
};

export default Owner;
