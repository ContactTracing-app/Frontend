// Converts uids to profiles so that we don't keep hitting firebase database
import { observable, decorate, action } from 'mobx';
import { firebase } from 'gatsby-theme-firebase';

export type Person = {
  displayName: string;
  photoURL: string | undefined;
};

export interface PersonStoreProps {
  getPeople: (uids: string[]) => Promise<Person>;
  getPerson: (uid: string) => Promise<Person>;
  loadPerson: (uid: string) => Promise<Person>;
  loadPeople: (uids: string[]) => Promise<Person>;
}

export class PersonStore implements PersonStoreProps {
  personRegistry = observable.map<string, Person>();

  async loadPerson(uid: string) {
    const snapshot = await firebase
      .database()
      .ref(`profiles/${uid}`)
      .once('value');

    const value = snapshot.val() as Person;

    const displayName =
      value && value.displayName ? value.displayName : 'Anonymous';
    const photoURL =
      value && value.photoURL ? value.photoURL : undefined;

    const person: Person = {
      displayName,
      photoURL
    };
    this.personRegistry.set(uid, person);
    return person;
  }

  async getPerson(uid: string) {
    if (this.personRegistry.has(uid)) {
      return this.personRegistry.get(uid);
    }
    return this.loadPerson(uid);
  }

  getPeople(uids: string[]) {
    return Promise.all(uids.map((uid) => this.getPerson(uid)));
  }
}

decorate(PersonStore, {
  personRegistry: observable,
  getPeople: action,
  getPerson: action,
  loadPerson: action
});
