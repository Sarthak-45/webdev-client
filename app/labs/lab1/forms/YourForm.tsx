export default function YourForm() {
  return (
    <form id="wd-your-form">
      <h4>Student Profile</h4>

      <label htmlFor="wd-your-first-name">First Name: </label>
      <input type="text" id="wd-your-first-name" defaultValue="Jane" placeholder="Jane" />
      <br />
      <label htmlFor="wd-your-last-name">Last Name: </label>
      <input type="text" id="wd-your-last-name" defaultValue="Doe" placeholder="Doe" />
      <br />
      <label htmlFor="wd-your-password">Password: </label>
      <input type="password" id="wd-your-password" defaultValue="password123" />
      <br />

      <label htmlFor="wd-your-bio">Bio: </label>
      <br />
      <textarea
        id="wd-your-bio"
        cols={50}
        rows={4}
        defaultValue="I am taking this course to learn modern web development and build real-world applications."
      />
      <br />

      <label>Class Standing:</label>
      <br />
      <input type="radio" name="wd-class-standing" id="wd-radio-freshman" />
      <label htmlFor="wd-radio-freshman">Freshman</label>
      <br />
      <input type="radio" name="wd-class-standing" id="wd-radio-sophomore" />
      <label htmlFor="wd-radio-sophomore">Sophomore</label>
      <br />
      <input type="radio" name="wd-class-standing" id="wd-radio-junior" />
      <label htmlFor="wd-radio-junior">Junior</label>
      <br />
      <input type="radio" name="wd-class-standing" id="wd-radio-senior" />
      <label htmlFor="wd-radio-senior">Senior</label>
      <br />
      <input type="radio" name="wd-class-standing" id="wd-radio-graduate" defaultChecked />
      <label htmlFor="wd-radio-graduate">Graduate</label>
      <br />

      <label>Enrollment:</label>
      <br />
      <input type="radio" name="wd-enrollment" id="wd-radio-fulltime" defaultChecked />
      <label htmlFor="wd-radio-fulltime">Full-Time</label>
      <br />
      <input type="radio" name="wd-enrollment" id="wd-radio-parttime" />
      <label htmlFor="wd-radio-parttime">Part-Time</label>
      <br />

      <label>Interests:</label>
      <br />
      <input type="checkbox" id="wd-check-html" defaultChecked />
      <label htmlFor="wd-check-html">HTML &amp; CSS</label>
      <br />
      <input type="checkbox" id="wd-check-react" defaultChecked />
      <label htmlFor="wd-check-react">React</label>
      <br />
      <input type="checkbox" id="wd-check-databases" />
      <label htmlFor="wd-check-databases">Databases</label>
      <br />
      <input type="checkbox" id="wd-check-apis" />
      <label htmlFor="wd-check-apis">REST APIs</label>
      <br />

      <label htmlFor="wd-your-major">Major: </label>
      <select id="wd-your-major" defaultValue="cs">
        <option value="cs">Computer Science</option>
        <option value="data-analytics">Data Analytics Engineering</option>
        <option value="information-systems">Information Systems</option>
        <option value="software-engineering">Software Engineering</option>
      </select>
      <br />

      <label htmlFor="wd-your-topics">Topics to deepen this term: </label>
      <br />
      <select id="wd-your-topics" multiple defaultValue={["html", "react"]}>
        <option value="html">HTML</option>
        <option value="css">CSS</option>
        <option value="react">React</option>
        <option value="nextjs">Next.js</option>
        <option value="typescript">TypeScript</option>
        <option value="databases">Databases</option>
      </select>
      <br />

      <label htmlFor="wd-your-email">Email: </label>
      <input
        type="email"
        id="wd-your-email"
        placeholder="jane@university.edu"
        defaultValue="jane@university.edu"
      />
      <br />

      <label htmlFor="wd-your-grad-year">Expected Graduation Year: </label>
      <input
        type="number"
        id="wd-your-grad-year"
        defaultValue="2026"
        min={2024}
        max={2030}
      />
      <br />

      <label htmlFor="wd-your-dob">Program Start Date: </label>
      <input
        type="date"
        id="wd-your-dob"
        defaultValue="2024-09-01"
        min="2000-01-01"
        max="2030-12-31"
      />
      <br />

      <label htmlFor="wd-your-excitement">
        How excited are you about this course? (0–10):
      </label>
      <input
        type="range"
        id="wd-your-excitement"
        defaultValue="8"
        min="0"
        max="10"
      />
      <br />

      <button id="wd-your-form-save" type="submit">Save</button>
      <button id="wd-your-form-cancel" type="button">Cancel</button>
    </form>
  );
}
