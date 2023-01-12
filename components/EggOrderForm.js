import styles from './eggOrderForm.module.css'

export default function EggOrderForm() {
  return (
      <form
        className={styles.form}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        name="eggOrderForm"
        method="POST"
        action="/success"
      >
        <input type="hidden" name="form-name" value="eggOrderForm" />
        <p className={styles.hidden}>
            <label>
            Don't fill this out if you're human: <input name="bot-field" />
            </label>
        </p>

        <label htmlFor="name">Name</label>
        <input id="name" className={styles['form-field']} type="text" name="name" required/>

        <label htmlFor="tel">Phone Number</label>
        <input id="tel" className={styles['form-field']} type="tel" name="tel" required/>

        <fieldset>
          <label htmlFor="eggcount">Number of Eggs</label>
          <select id="eggcount" className={styles['form-field']} name="eggcount" required>
            <option value="12" selected>1 dozen ($4.00)</option>
            <option value="18">18 eggs ($6.00)</option>
            <option value="24">2 dozen ($8.00)</option>
            <option value="36">3 dozen ($12.00)</option>
            <option value="48">4 dozen ($16.00)</option>
          </select>
        </fieldset>

        <button className={styles.button} type="submit">Submit</button>
      </form>
  )
}
