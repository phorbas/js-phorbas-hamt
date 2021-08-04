# PHORBAS HAMT

PHORBAS HAMT is inspired by CouchDB's syncing, CRDTs, and immutable CAS.
Using CBOR as a binary-friendly encoding standard, the hash array mapped TRIE is
designed to address the principle of **Replicable** under the constrains of
**Opaque** and **Binary key/content**.

- [PHORBAS Opaque][] handles the principle of **Hashed**, **Opaque**, and **Addressable**.
- [PHORBAS Store][] handles the principles of **Persistent**, **Binary key/content**, **Addressable**, and **Store**.

 [PHORBAS Opaque]: https://github.com/phorbas/js-phorbas-opaque
 [PHORBAS Store]: https://github.com/phorbas/js-phorbas-store


## About PHORBAS

The PHORBAS project implements a persistent binary data storage scheme that
accomodates opaque (encrypted) information. It is inspired by binary [content
addressable data storage][CAS], replication features of [CouchDB][], the opaque
data storage of [Tahoe-LAFS][], the eventual consistency of [CRDTs][], and
persistent [Hash array mapped trie][HAMT] data structures.

[Phorbas appears in in Greek mythology][myth] and is connected to "giving
pasture" -- in this case, safe pasture to for data storage.

    P - Persistent
    H - Hashed
    O - Opaque
    R - Replicable
    B - Binary key/content
    A - Addressable
    S - Store

Due to the opaque nature of the data storage, the storage is not queryable
like a database. It is similar to [IPFS][] with a less ambitious goal of
being a pratical data storage scheme for data for embedding into other
projects.

  [CAS]: https://en.wikipedia.org/wiki/Content-addressable_storage
  [CouchDB]: https://couchdb.apache.org/
  [Tahoe-LAFS]: https://tahoe-lafs.readthedocs.io/en/tahoe-lafs-1.12.1/specifications/file-encoding.html
  [CRDTs]: https://en.wikipedia.org/wiki/Conflict-free_replicated_data_type
  [HAMT]: https://en.wikipedia.org/wiki/Hash_array_mapped_trie
  [IPFS]: https://ipfs.io/
  [myth]: https://en.wikipedia.org/wiki/Phorbas


## License

[2-Clause BSD](./LICENSE)

