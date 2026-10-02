export class AdminPage {
  constructor(page) {
    this.page = page;
    this.addButton = page.getByRole('button', { name: 'Add' });
    this.employeeNameInput = page.locator('.oxd-input-group:has(label:text("Employee Name")) input');
    this.usernameInput = page.locator('.oxd-input-group:has(label:text("Username")) input');
    this.passwordInput = page.locator('.oxd-input-group:has(label:text("Password")) input').first();
    this.confirmPasswordInput = page.locator('.oxd-input-group:has(label:text("Confirm Password")) input');
    this.statusDropdown = page.locator('.oxd-input-group:has(label:text("Status")) .oxd-select-text');
    this.userRoleDropdown = page.locator('.oxd-input-group:has(label:text("User Role")) .oxd-select-text');
    this.saveButton = page.getByRole('button', { name: 'Save' });
  }

  async openAddUserForm() {
    await this.addButton.click();
  }

  async selectFromAutocomplete(inputLocator, text, optionText) {
    await inputLocator.click();
    await inputLocator.fill(text);

    const option = this.page.getByRole('option', { name: optionText }).first();
    await option.waitFor({ state: 'visible' });
    await option.click();
  }

  async selectUserRole(roleName) {
    await this.userRoleDropdown.click();
    await this.page.getByRole('option', { name: roleName }).click();
  }

  async selectStatus(statusName) {
    await this.statusDropdown.click();
    await this.page.getByRole('option', { name: statusName }).click();
  }

  async fillUserDetails({ employeeName, username, password, confirmPassword }) {
    await this.selectFromAutocomplete(this.employeeNameInput, employeeName, 'Orange  Test');
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.confirmPasswordInput.fill(confirmPassword);
  }

  async saveUser() {
    await this.saveButton.click();
  }
}