class SkillsManager {
  constructor() {
    this.skills = [];
  }

  addSkill(skill) {
    if (typeof skill === "string" && skill.length >= 2) {
      this.skills.push(skill);
      return skill;
    }

    return null;
  }

  getAllSkills() {
    return this.skills;
  }
}

// const skillsManager = new SkillsManager()
//
// console.log(skillsManager.addSkill('JavaScript'))
// console.log(skillsManager.addSkill('CSS'))
// console.log(skillsManager.getAllSkills())
