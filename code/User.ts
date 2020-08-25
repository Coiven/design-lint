class User {
  readonly name;
  readonly profession;
  readonly bio;
  readonly avatar;
  readonly commits;

  constructor(props) {
    const { name, profession, bio, avatar, commits } = props;
    this.name = name || '';
    this.profession = profession || '';
    this.bio = bio || '';
    this.avatar = avatar || '';
    this.commits = commits || [];
  }

  update(key, value) {
    if (!key || !value) return;
    this[key] = value;
  }

  commit(type, target, desc) {
    if (!type || !target || !desc) return;
    this.commits.push(`${type}(${target}): ${desc}`);
  }
}

export default User;