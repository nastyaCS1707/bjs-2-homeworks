class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, callback) {
    if (time == null || callback == null) {
      throw new Error("Отсутствуют обязательные аргументы");
    }
    if (this.alarmCollection.some((el) => el.time === time)) {
      console.warn("Уже присутствует звонок на это же время");
    }
    this.alarmCollection.push({
      callback: callback,
      time: time,
      canCall: true,
    });
  }

  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(
      (el) => el.time !== time,
    );
  }

  getCurrentFormattedTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  start() {
    if (this.intervalId) {
      return console.log("не может существовать несколько и интервалов");
    } else {
      this.intervalId = setInterval(() => {
        this.alarmCollection.forEach((call) => {
          if (
            call.time === this.getCurrentFormattedTime() &&
            call.canCall === true
          ) {
            call.canCall = false;
            call.callback();
          }
        });
      }, 1000);
    }
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach((call) => (call.canCall = true));
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}
