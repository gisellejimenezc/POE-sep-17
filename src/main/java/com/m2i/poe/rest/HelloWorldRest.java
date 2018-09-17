package com.m2i.poe.rest;

import com.m2i.poe.media.Book;
import com.m2i.poe.media.BookJPARepository;
import com.m2i.poe.media.EntityManagerFactorySingleton;

import javax.persistence.EntityManager;
import javax.persistence.EntityTransaction;
import javax.ws.rs.core.*;

import javax.ws.rs.*;
import java.sql.SQLException;
import java.util.List;

@Path("/hello")
public class HelloWorldRest {

    private BookJPARepository repo = new BookJPARepository();

    @GET
    @Path("/world")
    @Produces(MediaType.TEXT_PLAIN)
    public String getHello() {
        return "Hello World!";
    }

    @GET
    @Path("/param/{s}")
    @Produces(MediaType.TEXT_PLAIN)
    public String getHello(@PathParam("s") String s) {
        return "Hello "+s;
    }

    @GET
    @Path("/mock/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Book getMock(@PathParam("id") int id) {
        Book b = new Book();
        b.setTitle("JSON");
        b.setId(id);
        b.setPrice(99);
        return b;
    }

    @GET
    @Path("/book/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Book getBook(@PathParam("id") int id) throws SQLException {
        return repo.getById(id);
    }


    @GET
    @Path("/book/price/{price}")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Book> getBook(@PathParam("price") double price) throws SQLException {
        return repo.getByPrice(price);
    }

    @GET
    @Path("/book")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Book> getBook() throws SQLException {
        return repo.getAll();
    }

    @GET
    @Path("/book/title/{title}")
    @Produces(MediaType.APPLICATION_JSON)
<<<<<<< HEAD
    public List<Book> getBook(@PathParam("title") String title) {
        EntityManager em = EntityManagerFactorySingleton.getEntityManager();// Pour mettre tout dans le repository
        List<Book> l = em.createQuery("select b from Book b where upper(b.title) like '%"+ title.toUpperCase() + "%'").getResultList();
        return l;                                                           // Baptiste remplace ces trois lignes par
        }                                                                   // return BookJPARepository.getByTitle(title);


    /*Dans BookJPARepository.java il define les methods:
      Avant tous les methods il y a la ligne
      private static EntityManager em = EntityManagerFactorySingleton.getEntityManager();
      et le constructeur:
      private BookJPARepository(){}*/

    /*le methode getByTitle est definie:
        public static List<Book> getByTitle(String title){
            return em.createQuery("select b from Book b where upper(b.title) like '%"+ title.toUpperCase() + "%'").getResultList();
        }
    */
=======
    public List<Book> getBook(@PathParam("title") String title) throws SQLException {
        return repo.getByTitle(title);
    }
>>>>>>> 76bd32226bfd0f1ea432c541a36fbe0afc844fd8

    @PUT
    @Path("/book")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Book putBook(Book b) throws SQLException {
        repo.add(b);
        return b;
    }

    //PUT by Baptiste  // Selon Vitalia PUT est pour update, post est pour create, alors j'ai echanger @POST et @PUT, mais a la fin c'est juste les noms des annotations
    @POST
    @Path("/createbook/{title}/{price}")
    @Consumes(MediaType.APPLICATION_JSON)
<<<<<<< HEAD
    @Produces(MediaType.APPLICATION_JSON)
    public void addBook(@PathParam("title") String title, @PathParam("price") double price){
        BookJPARepository.createBook(title, price);
    }

    @PUT
    @Path("/updatebook/{id}/{title}/{price}")
    @Consumes(MediaType.APPLICATION_JSON)
    public void upBook(@PathParam("id") int id, @PathParam("title") String title, @PathParam("price") double price) {
        EntityManager em = EntityManagerFactorySingleton.getEntityManager();
        Book b = em.find(Book.class,id);
        if (b == null) {
             Response.status(Response.Status.NOT_FOUND).build();
        } else {
            b.setTitle(title);
            b.setPrice(price);
            EntityTransaction t = em.getTransaction();
            t.begin();
            em.persist(em.merge(b));
            t.commit();
        }
=======
    public Response postBook(Book b) throws SQLException {
        Book book = repo.getById(b.getId());
        if (book == null) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
        repo.update(b);
        return Response.ok().build();
>>>>>>> 76bd32226bfd0f1ea432c541a36fbe0afc844fd8
    }


    @DELETE // MARCHE OK
    @Path("/book/{id}")
    public Response deleteBook(@PathParam("id") int id) throws SQLException {
        Book book = repo.getById(id);
        if (book == null) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
        repo.remove(book);
        return Response.ok().build();
    }
}