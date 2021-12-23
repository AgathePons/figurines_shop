## Jointures en bdd

```SELECT f.id, r.note FROM figurine f JOIN review r ON r.figurine_id = f.id;```

Je veux le croisé entre les id de figurine et les notes de review

```SELECT f.id, r.note```

D’où ? Depuis figurine que j'ai appelle arbitrairement “f” que je "lie" à review que j'ai appelé arbitrairement “r”

```FROM figurine f JOIN review r```

Comment faire le lien ? En utilisant la clef étrangere d'entité jointe avec l'identiant de la table originale

```ON r.figurine_id = f.id;```


```SELECTIONNE <champs> DEPUIS <tableA> <A> QUI EST LIEE A <tableB> <B> SELON <B>.<champAvecClefEtrangere> QUI EST EGAL A <tableA>.<identifiant>```